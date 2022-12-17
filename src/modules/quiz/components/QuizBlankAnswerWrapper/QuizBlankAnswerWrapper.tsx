import React, { useEffect, useState } from "react";
import "./QuizBlankAnswerWrapper.scss";
import { useRef } from "react";
import ButtonContinueWrapper from "../ButtonContinueWrapper/ButtonContinueWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsAnswered,
  setIsAnsweredCorrect,
  setIsCompleteAnswer,
} from "../../redux/actions";

const QuizBlankAnswerWrapper = () => {
  const dispatch = useDispatch();

  const content = useSelector((state: any) => state.quiz.quiz.quizQuestion);
  console.log(content);
  const answers = useSelector((state: any) => state.quiz.quiz.answers);
  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);

  const orderedResult = answers.sort((item: any) => item.answerOrder);

  const [inputAnswerList, setInputAnswerList] = useState<string[]>([]);
  console.log(inputAnswerList);
  console.log(orderedResult);
  // const isCompleteAnswer = inputAnswerList.length === orderedResult.length;
  // const isAnswerCorrect =
  //     inputAnswerList.length === orderedResult.length &&
  //     inputAnswerList.find(
  //         (inputAnswer, index) =>
  //             inputAnswer.toLocaleLowerCase() !== orderedResult[index].answerBlank.toLocaleLowerCase(),
  //     ) === undefined;

  let inputListRef = useRef<NodeListOf<HTMLInputElement> | null>(
    document.querySelectorAll(".quiz-blank-answer input")
  );

  useEffect(() => {
    dispatch(
      setIsCompleteAnswer(inputAnswerList.length === orderedResult.length)
    );
    dispatch(
      setIsAnsweredCorrect(
        inputAnswerList.length === orderedResult.length &&
          inputAnswerList.find(
            (inputAnswer, index) =>
              inputAnswer.toLocaleLowerCase() !==
              orderedResult[index].answerBlank.toLocaleLowerCase()
          ) === undefined
      )
    );
  }, [inputAnswerList]);
  useEffect(() => {
    if (isAnswered) {
      inputListRef.current?.forEach((inputEl: HTMLInputElement, index) => {
        inputEl.disabled = true;
        if (
          inputAnswerList[index].toLocaleLowerCase() ===
          orderedResult[index].answerBlank.toLocaleLowerCase()
        ) {
          inputEl.classList.add("blank--correct");
        } else {
          inputEl.classList.add("blank--incorrect");
        }
      });
    }
  }, [isAnswered]);
  useEffect(() => {
    if (inputListRef.current) {
      inputListRef.current = document.querySelectorAll(
        ".quiz-blank-answer input"
      );
      inputListRef.current.forEach((inputEl: HTMLInputElement, index) => {
        inputEl.addEventListener("input", () => {
          inputAnswerList[index] = inputEl.value.trim();
          setInputAnswerList([...inputAnswerList]);
        });
      });
    }
  }, []);
  useEffect(() => {
    inputListRef.current = document.querySelectorAll(
      ".quiz-blank-answer input"
    );
  }, []);
  return (
    <div className="quiz-blank-answer">
      <div
        className="quiz-blank-answer__content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default QuizBlankAnswerWrapper;
