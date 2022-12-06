import React from "react";
import "./QuizOption.css";

type Props = {
  children?: JSX.Element | string;
  isSelected: boolean;
  isAnswered: boolean;
  isCorrect: boolean | null;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const QuizOption: React.FC<Props> = (props) => {
  const { children, isSelected, isAnswered, isCorrect, onClick } = props;
  return (
    <div
      className={`
      ${isSelected ? "quiz-option--selected" : "quiz-option--not-selected"} 
      ${
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
  );
};

export default QuizOption;
