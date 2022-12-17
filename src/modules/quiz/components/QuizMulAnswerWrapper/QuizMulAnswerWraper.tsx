import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizMulAnswerOptionWrapper from "../QuizMulAnswerOptionWrapper/QuizMulAnswerOptionWrapper";
import "./QuizMulAnswerWrapper.scss";
import { setIsAnsweredCorrect, setIsCompleteAnswer } from "../../redux/actions";

const QuizMulAnswerWraper: React.FC = () => {
  const dispatch = useDispatch();

  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);
  const [quizOptions, setQuizOptions] = useState<any>([]);

  const quizAnswerList = useSelector((state: any) => state.quiz.quiz.answers);

  const isNotSelectedCorrect =
    quizOptions.find((item: any) => item.isRightOption !== item.isSelected) !==
    undefined;
  const isSelectedOptions =
    quizOptions.find((item: any) => item.isSelected === true) !== undefined;

  const handleSelectOption = (indexQuizOption: number) => {
    if (!isAnswered) {
      quizOptions[indexQuizOption].isSelected =
        !quizOptions[indexQuizOption].isSelected;
      setQuizOptions([...quizOptions]);
    }
  };

  useEffect(() => {
    setQuizOptions(
      quizAnswerList.map((item: any) => {
        return { ...item, isSelected: false };
      })
    );
  }, [quizAnswerList]);

  useEffect(() => {
    dispatch(setIsCompleteAnswer(isSelectedOptions));
    dispatch(setIsAnsweredCorrect(!isNotSelectedCorrect));
  }, [quizOptions]);
  return (
    <div className="quiz-mul-answer quiz-option-container">
      {quizOptions.map((item: any, index: number) => (
        <QuizMulAnswerOptionWrapper
          isTempSelected={false}
          isSelected={item.isSelected}
          isAnswered={isAnswered}
          isCorrect={item.isRightOption}
          onClick={() => handleSelectOption(index)}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          ></div>
        </QuizMulAnswerOptionWrapper>
      ))}
    </div>
  );
};

export default QuizMulAnswerWraper;
