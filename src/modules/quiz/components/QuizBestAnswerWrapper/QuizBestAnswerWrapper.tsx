import React, { useState } from "react";
import ButtonContinueWrapper from "../ButtonContinueWrapper/ButtonContinueWrapper";
import QuizBestAnswerOptionWrapper from "../QuizBestAnswerOptionWrapper/QuizBestAnswerOptionWrapper";
import "./QuizBestAnswerWrapper.scss";

const QuizBestAnswerWrapper = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const isOptionSelected = selectedOption !== null;

  const [isSelectedCorrect, setIsSelectedCorrect] = useState<boolean>(false);
  const quizOptions = [
    { id: 1, description: "1203g", isCorrect: true },
    { id: 2, description: "1204g", isCorrect: false },
    { id: 3, description: "1205g", isCorrect: false },
    { id: 4, description: "1206g", isCorrect: false },
  ];

  const handleSelectOption = (
    idQuizOption: number,
    isQuizOptionCorrect: boolean
  ) => {
    if (!isAnswered) {
      setSelectedOption(idQuizOption);
      setIsSelectedCorrect(isQuizOptionCorrect);
    }
  };

  const handleButtonContinueClick = () => {
    setIsAnswered(true);
  };
  return (
    <div className="quiz-best-answer quiz-container">
      {quizOptions.map((quiz) => (
        <QuizBestAnswerOptionWrapper
          key={quiz.id}
          isTempSelected={false}
          isSelected={quiz.id === selectedOption}
          isAnswered={isAnswered}
          isCorrect={quiz.isCorrect}
          onClick={() => handleSelectOption(quiz.id, quiz.isCorrect)}
        >
          {quiz.description}
        </QuizBestAnswerOptionWrapper>
      ))}
      <ButtonContinueWrapper onClick={handleButtonContinueClick}>
        Tiếp tục
      </ButtonContinueWrapper>
    </div>
  );
};

export default QuizBestAnswerWrapper;
