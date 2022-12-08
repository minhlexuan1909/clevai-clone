import React from "react";
import "./QuizOptionWrapper.scss";

type Props = {
  children?: JSX.Element | string;
  isTempSelected: boolean;
  isSelected: boolean;
  isAnswered: boolean;
  isCorrect: boolean | null;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

type Ref = HTMLDivElement;

const QuizOptionWrapper = React.forwardRef<Ref, Props>((props, ref) => {
  const {
    children,
    isTempSelected,
    isSelected,
    isAnswered,
    isCorrect,
    onClick,
  } = props;
  return (
    <div ref={ref} className="quiz-option-wrapper">
      <div
        className={`${
          isSelected ? "quiz-option--selected" : "quiz-option--not-selected"
        } ${isTempSelected ? "quiz-option--temp-selected" : ""} ${
          isAnswered
            ? isCorrect
              ? "quiz-option--correct"
              : isSelected
              ? "quiz-option--incorrect"
              : ""
            : ""
        } 
      quiz-option`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
});

export default QuizOptionWrapper;
