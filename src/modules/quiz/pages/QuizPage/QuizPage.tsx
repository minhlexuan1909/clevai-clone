import "./QuizPage.css";

import React, { useState } from "react";

import ButtonContinue from "../../components/ButtonContinue/ButtonContinue";
import QuizOption from "../../components/QuizOption/QuizOption";

const QuizPage: React.FC = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isSelectedCorrect, setIsSelectedCorrect] = useState<boolean>(false);
  const isOptionSelected = selectedOption !== null;
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
    <div className="quiz-page">
      {quizOptions.map((quiz) => (
        <QuizOption
          key={quiz.id}
          isSelected={quiz.id === selectedOption}
          isAnswered={isAnswered}
          isCorrect={quiz.isCorrect}
          onClick={() => handleSelectOption(quiz.id, quiz.isCorrect)}
        >
          {quiz.description}
        </QuizOption>
      ))}
      <ButtonContinue
        isCompleteAnswer={isOptionSelected}
        isAnswered={isAnswered}
        isAnsweredCorrect={isAnswered && isSelectedCorrect}
        onClick={handleButtonContinueClick}
      >
        Tiếp tục
      </ButtonContinue>
    </div>
  );
};

export default QuizPage;
