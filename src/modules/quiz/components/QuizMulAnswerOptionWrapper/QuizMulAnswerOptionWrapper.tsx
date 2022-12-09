import React from "react";
import "./QuizMulAnswerOptionWrapper.scss";
import QuizOptionWrapper, {
  QuizOptionProps,
} from "../QuizOptionWrapper/QuizOptionWrapper";
import Checkbox from "src/modules/common/components/Checkbox/Checkbox";

const QuizMulAnswerOptionWrapper: React.FC<QuizOptionProps> = (props) => {
  const {
    isAnswered,
    isCorrect,
    isSelected,
    isTempSelected,
    onClick,
    children,
  } = props;
  return (
    <div className="quiz-mul-answer-option">
      <Checkbox isSelected={isSelected} onClick={onClick} />
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

export default QuizMulAnswerOptionWrapper;
