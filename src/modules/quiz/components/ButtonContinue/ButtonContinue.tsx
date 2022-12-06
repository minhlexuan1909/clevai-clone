import React, { useEffect, useState } from "react";
import Button from "src/modules/common/components/Button/Button";
import "./ButtonContinue.css";

type Props = {
  children: string;
  correctDelaySecond?: number;
  incorrectDelaySecond?: number;
  isCompleteAnswer: boolean;
  isAnswered: boolean;
  isAnsweredCorrect: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonContinue: React.FC<Props> = (props) => {
  const {
    children,
    correctDelaySecond = 1,
    incorrectDelaySecond = 15,
    isCompleteAnswer,
    isAnswered,
    isAnsweredCorrect,
    onClick,
  } = props;
  const [isDelay, setIsDelay] = useState<boolean>(false);

  const delayTime =
    isAnswered && isAnsweredCorrect ? correctDelaySecond : incorrectDelaySecond;
  const [delayTimeLeft, setDelayTimeLeft] = useState<number>(delayTime);

  useEffect(() => {
    let delayContinue: ReturnType<typeof setTimeout>;
    let delayTimer: ReturnType<typeof setInterval>;
    if (isAnswered) {
      setIsDelay(true);
      delayContinue = setTimeout(() => setIsDelay(false), delayTime * 1000);
      delayTimer = setInterval(() => {
        setDelayTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (delayContinue) clearTimeout(delayContinue);
      if (delayTimer) clearInterval(delayTimer);
    };
  }, [isAnswered, isAnsweredCorrect, delayTime]);

  return (
    <Button
      className="btn-continue"
      disableCondition={!isCompleteAnswer || isDelay}
      onClick={onClick}
      type="button"
    >
      {children +
        (isAnswered && !isAnsweredCorrect && delayTimeLeft > 0
          ? ` (${delayTimeLeft})`
          : "")}
    </Button>
  );
};

export default ButtonContinue;
