import React, { SyntheticEvent, useState } from "react";
import QuizOption from "../../components/QuizOption/QuizOption";

import "./QuizPage.css";

const QuizPage: React.FC = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const quizOptions = [
    { id: 1, description: "1203g", isCorrect: true },
    { id: 2, description: "1204g", isCorrect: false },
    { id: 3, description: "1205g", isCorrect: false },
    { id: 4, description: "1206g", isCorrect: false },
  ];

  const handleSelectOption = (idQuiz: number) => {
    setSelectedOption(idQuiz);
  };

  return (
    <div className="quiz-page">
      {quizOptions.map((quiz) => (
        <QuizOption
          key={quiz.id}
          isSelected={quiz.id === selectedOption}
          isAnswered={isAnswered}
          isCorrect={quiz.isCorrect}
          onClick={() => handleSelectOption(quiz.id)}
        >
          {quiz.description}
        </QuizOption>
      ))}
    </div>
  );
};

export default QuizPage;
