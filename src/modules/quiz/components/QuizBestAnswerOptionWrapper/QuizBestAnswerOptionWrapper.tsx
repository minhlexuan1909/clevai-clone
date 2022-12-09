import React from "react";
import QuizOptionWrapper from "../QuizOptionWrapper/QuizOptionWrapper";
import "./QuizBestAnswerOptionWrapper.scss";
import { QuizOptionProps } from "../QuizOptionWrapper/QuizOptionWrapper";

const QuizBestAnswerOptionWrapper: React.FC<QuizOptionProps> = (props) => {
  const {
    isAnswered,
    isCorrect,
    isSelected,
    isTempSelected,
    onClick,
    children,
  } = props;
  return (
    <div className="quiz-best-answer-option">
      <QuizOptionWrapper
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        isSelected={isSelected}
        isTempSelected={isTempSelected}
        onClick={onClick}
      >
        {children}
      </QuizOptionWrapper>
    </div>
  );
};

export default QuizBestAnswerOptionWrapper;
