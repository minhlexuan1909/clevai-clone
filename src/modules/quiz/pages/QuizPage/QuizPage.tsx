import "./QuizPage.scss";

import React from "react";

import QuizConnectWrapper from "../../components/QuizConnectWrapper/QuizConnectWrapper";
import QuizBestAnswerWrapper from "../../components/QuizBestAnswerWrapper/QuizBestAnswerWrapper";

const QuizPage: React.FC = () => {
  // COMMON PART
  //

  // SEPERATE PART
  // Select best

  //

  return (
    <div className="quiz-page">
      <div className="quiz-page__answer">
        <QuizConnectWrapper />
        <QuizBestAnswerWrapper />
      </div>
    </div>
  );
};

export default QuizPage;
