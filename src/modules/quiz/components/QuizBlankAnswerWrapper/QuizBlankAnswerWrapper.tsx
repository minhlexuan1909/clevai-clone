import React, { useEffect, useState } from "react";
import "./QuizBlankAnswerWrapper.scss";
import { useRef } from "react";
import ButtonContinueWrapper from "../ButtonContinueWrapper/ButtonContinueWrapper";

const QuizBlankAnswerWrapper = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const answers = [
    {
      id: 9,
      createBy: "admin",
      createDate: null,
      modifiedBy: "admin",
      modifiedDate: null,
      content: "",
      isRightOption: false,
      correctConnectContent: null,
      answerOrder: 1,
      answerBlank: "Vịt",
    },
    {
      id: 10,
      createBy: "admin",
      createDate: null,
      modifiedBy: "admin",
      modifiedDate: null,
      content: "",
      isRightOption: false,
      correctConnectContent: null,
      answerOrder: 2,
      answerBlank: "hai",
    },
  ];
  const orderedResult = answers.sort((item) => item.answerOrder);

  const [inputAnswerList, setInputAnswerList] = useState<string[]>([]);
  const isCompleteAnswer = inputAnswerList.length === orderedResult.length;
  const isAnswerCorrect =
    inputAnswerList.length === orderedResult.length &&
    inputAnswerList.find(
      (inputAnswer, index) =>
        inputAnswer.toLocaleLowerCase() !==
        orderedResult[index].answerBlank.toLocaleLowerCase()
    ) === undefined;

  let inputListRef = useRef<NodeListOf<HTMLInputElement> | null>(
    document.querySelectorAll(".quiz-blank-answer input")
  );
  const content = `<p>Một con <input /> xòe ra <input /> cái cánh</p>`;

  const handleButtonContinueClick = () => {
    setIsAnswered(true);
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
  };
  useEffect(() => {
    if (inputListRef.current) {
      console.log(inputListRef.current);
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
      <ButtonContinueWrapper
        isCompleteAnswer={isCompleteAnswer}
        isAnswered={isAnswered}
        isAnsweredCorrect={isAnswerCorrect}
        onClick={handleButtonContinueClick}
      >
        Tiếp tục
      </ButtonContinueWrapper>
    </div>
  );
};

export default QuizBlankAnswerWrapper;
