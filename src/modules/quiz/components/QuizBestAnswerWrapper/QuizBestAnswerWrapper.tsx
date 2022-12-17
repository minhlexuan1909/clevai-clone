import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCompleteAnswer, setIsAnsweredCorrect } from "../../redux/actions";
import ButtonContinueWrapper from "../ButtonContinueWrapper/ButtonContinueWrapper";
import QuizBestAnswerOptionWrapper from "../QuizBestAnswerOptionWrapper/QuizBestAnswerOptionWrapper";
import "./QuizBestAnswerWrapper.scss";

const QuizBestAnswerWrapper = () => {
  const dispatch = useDispatch();
  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);

  const [isSelectedCorrect, setIsSelectedCorrect] = useState<boolean>(false);
  const quizOptions = useSelector((state: any) => state.quiz.quiz.answers);

  const handleSelectOption = (
    idQuizOption: number,
    isQuizOptionCorrect: boolean
  ) => {
    if (!isAnswered) {
      setSelectedOption(idQuizOption);
      dispatch(setIsAnsweredCorrect(isQuizOptionCorrect));
    }
  };
  useEffect(() => {
    if (selectedOption) {
      dispatch(setIsCompleteAnswer(true));
    }
  }, [selectedOption]);
  return (
    <div className="quiz-best-answer quiz-option-container">
      {quizOptions.map((quiz: any) => (
        <QuizBestAnswerOptionWrapper
          key={quiz.id}
          isTempSelected={false}
          isSelected={quiz.id === selectedOption}
          isAnswered={isAnswered}
          isCorrect={quiz.isRightOption}
          onClick={() => handleSelectOption(quiz.id, quiz.isRightOption)}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: quiz.content,
            }}
          ></div>
        </QuizBestAnswerOptionWrapper>
      ))}
    </div>
  );
};

export default QuizBestAnswerWrapper;
