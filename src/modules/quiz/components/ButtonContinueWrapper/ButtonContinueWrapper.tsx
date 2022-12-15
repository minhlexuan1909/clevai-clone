import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/modules/common/components/Button/Button";
import "./ButtonContinueWrapper.css";
import {
  setIsAnswered,
  updateQuizStatus,
  getQuizByLearningObjectId,
} from "../../redux/actions";
// import { IRootState } from "../../../base/redux/store";
import { UPDATE_QUIZ_STATUS_STATE } from "../../utils/constants";

type Props = {
  children?: string;
  incorrectDelaySecond?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonContinueWrapper: React.FC<Props> = (props) => {
  const { children, incorrectDelaySecond = 15, onClick = () => {} } = props;

  const dispatch = useDispatch();

  const isCompleteAnswer = useSelector(
    (state: any) => state.quiz.isCompleteAnswer
  );
  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);
  const isAnsweredCorrect = useSelector(
    (state: any) => state.quiz.isAnsweredCorrect
  );
  const quizId = useSelector((state: any) => state.quiz.quiz.id);
  const updateQuizStatusState = useSelector(
    (state: any) => state.quiz.updateQuizStatusState
  );

  const [isDelay, setIsDelay] = useState<boolean>(false);

  const delayTime = incorrectDelaySecond;
  const [delayTimeLeft, setDelayTimeLeft] = useState<number>(delayTime);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    if (!isAnswered) {
      dispatch(setIsAnswered(true));
      // dispatch(
      //   updateQuizStatus({
      //     quizId: quizId,
      //     hasDoneRight: isAnsweredCorrect,
      //   })
      // );
    } else {
      dispatch(setIsAnswered(false));
      // dispatch(getQuizByLearningObjectId(1));
    }
  };

  useEffect(() => {
    let delayContinue: ReturnType<typeof setTimeout>;
    let delayTimer: ReturnType<typeof setInterval>;
    if (isAnswered && !isAnsweredCorrect) {
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
      disableCondition={
        !isCompleteAnswer ||
        isDelay ||
        updateQuizStatusState === UPDATE_QUIZ_STATUS_STATE.CALLING
      }
      onClick={handleClick}
      type="button"
    >
      {children +
        (isAnswered && !isAnsweredCorrect && delayTimeLeft > 0
          ? ` (${delayTimeLeft})`
          : "")}
    </Button>
  );
};

export default ButtonContinueWrapper;
