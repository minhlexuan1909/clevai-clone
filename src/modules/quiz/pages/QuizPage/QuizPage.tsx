import "./QuizPage.scss";

import React from "react";

import QuizConnectWrapper from "../../components/QuizConnectWrapper/QuizConnectWrapper";
import QuizBestAnswerWrapper from "../../components/QuizBestAnswerWrapper/QuizBestAnswerWrapper";
import QuizMulAnswerWraper from "../../components/QuizMulAnswerWrapper/QuizMulAnswerWraper";
import QuizBlankAnswerWrapper from "../../components/QuizBlankAnswerWrapper/QuizBlankAnswerWrapper";
import QuizOrderAnswerWrapper from "../../components/QuizOrderAnswerWrapper/QuizOrderAnswerWrapper";
import QuizHeaderWrapper from "../../components/QuizHeaderWrapper/QuizHeaderWrapper";
import ButtonContinueWrapper from "../../components/ButtonContinueWrapper/ButtonContinueWrapper";

const QuizPage: React.FC = () => {
  // const handleButtonContinueClick = () => {
  //   setIsAnswered(true);
  // };
  return (
    <div className="quiz-page">
      <QuizHeaderWrapper currentExp={23} totalExpRequired={100} />
      <div className="quiz-page__answer">
        <QuizConnectWrapper />
        {/* <QuizBestAnswerWrapper /> */}
        {/* <QuizMulAnswerWraper /> */}
        {/* <QuizBlankAnswerWrapper /> */}
        {/* <QuizOrderAnswerWrapper /> */}
      </div>
      <ButtonContinueWrapper>Tiếp tục</ButtonContinueWrapper>
    </div>
  );
};

export default QuizPage;
