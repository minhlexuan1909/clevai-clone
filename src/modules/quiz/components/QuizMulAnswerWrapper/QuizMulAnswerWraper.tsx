import React, { useState } from "react";
import ButtonContinueWrapper from "../ButtonContinueWrapper/ButtonContinueWrapper";
import QuizMulAnswerOptionWrapper from "../QuizMulAnswerOptionWrapper/QuizMulAnswerOptionWrapper";
import "./QuizMulAnswerWrapper.scss";

const QuizMulAnswerWraper: React.FC = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizOptions, setQuizOptions] = useState([
    { id: 1, description: "1203g", isCorrect: true, isSelected: false },
    { id: 2, description: "1204g", isCorrect: true, isSelected: false },
    { id: 3, description: "1205g", isCorrect: false, isSelected: false },
    { id: 4, description: "1206g", isCorrect: false, isSelected: false },
  ]);

  const isNotSelectedCorrect =
    quizOptions.find((item) => item.isCorrect !== item.isSelected) !==
    undefined;
  const isSelectedOpotions =
    quizOptions.find((item) => item.isSelected === true) !== undefined;

  const handleSelectOption = (indexQuizOption: number) => {
    if (!isAnswered) {
      quizOptions[indexQuizOption].isSelected =
        !quizOptions[indexQuizOption].isSelected;
      setQuizOptions([...quizOptions]);
    }
  };
  const handleButtonContinueClick = () => {
    setIsAnswered(true);
  };
  return (
    <div className="quiz-mul-answer quiz-container">
      {quizOptions.map((item, index) => (
        <QuizMulAnswerOptionWrapper
          isTempSelected={false}
          isSelected={item.isSelected}
          isAnswered={isAnswered}
          isCorrect={item.isCorrect}
          onClick={() => handleSelectOption(index)}
        >
          {item.description}
        </QuizMulAnswerOptionWrapper>
      ))}
      <ButtonContinueWrapper
        isCompleteAnswer={isSelectedOpotions}
        isAnswered={isAnswered}
        isAnsweredCorrect={!isNotSelectedCorrect}
        onClick={handleButtonContinueClick}
      >
        Tiếp tục
      </ButtonContinueWrapper>
    </div>
  );
};

export default QuizMulAnswerWraper;
