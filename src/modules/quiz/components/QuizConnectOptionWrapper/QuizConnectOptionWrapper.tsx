import React from "react";
import QuizOptionWrapper from "../QuizOptionWrapper/QuizOptionWrapper";
import "./QuizConnectOptionWrapper.scss";
import { QuizOptionProps } from "../QuizOptionWrapper/QuizOptionWrapper";
import { QuizOptionRef } from "../QuizOptionWrapper/QuizOptionWrapper";

const QuizConnectOptionWrapper = React.forwardRef<
  QuizOptionRef,
  QuizOptionProps
>((props, ref) => {
  const {
    children,
    isTempSelected,
    isSelected,
    isAnswered,
    isCorrect,
    onClick,
  } = props;
  return (
    <div ref={ref} className="quiz-connection-option">
      <QuizOptionWrapper
        isTempSelected={isTempSelected}
        isSelected={isSelected}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        onClick={onClick}
      >
        {children}
      </QuizOptionWrapper>
      <div
        className={`quiz-connection-option__connect-icon ${
          isTempSelected
            ? "quiz-connection-option__connect-icon--temp-selected"
            : ""
        } ${
          isSelected ? "quiz-connection-option__connect-icon--selected" : ""
        } ${
          isAnswered
            ? isCorrect
              ? "quiz-connection-option__connect-icon--correct"
              : "quiz-connection-option__connect-icon--incorrect"
            : ""
        }`}
        onClick={onClick}
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/link-simple-horizontal-3602781-3004355.png"
          alt="connect-icon"
        ></img>
      </div>
    </div>
  );
});

export default QuizConnectOptionWrapper;
