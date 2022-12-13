import "./QuizConnectWrapper.scss";

import React, { useEffect, useRef, useState } from "react";

import QuizConnectOptionWrapper from "../QuizConnectOptionWrapper/QuizConnectOptionWrapper";

type LeftAnswer = {
  id: number;
  description: string | JSX.Element;
  rightIndexConnectedTo: null | number;
};
type RightAnswer = {
  id: number;
  description: string | JSX.Element;
  leftIndexConnectedTo: null | number;
};

const QuizConnectWrapper = () => {
  const wrapperStyleRef = useRef<CSSStyleDeclaration | null>(null);

  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const leftConnectIconRef = useRef<null | HTMLDivElement>(null);
  const rightConnectIconRef = useRef<null | HTMLDivElement>(null);

  const [leftConnectIconRect, setLeftConnectIconRect] =
    useState<null | DOMRect>(null);
  const [rightConnectIconRect, setRightConnectIconRect] =
    useState<null | DOMRect>(null);
  const rowGapStyle = wrapperStyleRef.current?.rowGap;
  const quizWrapperHeight = leftConnectIconRect
    ? leftConnectIconRect.height
    : null;

  const topToMiddleQuizWrapperDistance =
    quizWrapperHeight && wrapperStyleRef.current?.rowGap
      ? quizWrapperHeight / 2
      : null;

  const middlePointDistance = quizWrapperHeight
    ? quizWrapperHeight + parseInt(rowGapStyle!.slice(0, rowGapStyle!.length))
    : null;

  const [selectedLeftIndex, setSelectedLeftIndex] = useState<null | number>(
    null
  );
  const [selectedRightIndex, setSelectedRightIndex] = useState<null | number>(
    null
  );
  const [isAllOptionConnected, setIsAllOptionConnected] =
    useState<boolean>(false);
  const [isConnectCorrect, setIsConnectCorrect] = useState<boolean>(false);

  const [leftAnswerList, setLeftAnswerList] = useState<LeftAnswer[]>([
    { id: 1, description: "Mèo", rightIndexConnectedTo: null },
    { id: 2, description: "Chó", rightIndexConnectedTo: null },
    { id: 3, description: "Khỉ", rightIndexConnectedTo: null },
  ]);
  const [rightAnswerList, setRightAnswerList] = useState<RightAnswer[]>([
    { id: 1, description: "Cá", leftIndexConnectedTo: null },
    { id: 2, description: "Xương", leftIndexConnectedTo: null },
    { id: 3, description: "Chuối", leftIndexConnectedTo: null },
  ]);

  const handleSelectLeftConnectOption = (leftIndex: number) => {
    if (
      !isAnswered &&
      leftAnswerList[leftIndex].rightIndexConnectedTo === null
    ) {
      setSelectedLeftIndex(leftIndex);
    } else if (!isAnswered) {
      rightAnswerList[
        leftAnswerList[leftIndex].rightIndexConnectedTo!
      ].leftIndexConnectedTo = null;
      leftAnswerList[leftIndex].rightIndexConnectedTo = null;
      setLeftAnswerList([...leftAnswerList]);
      setRightAnswerList([...rightAnswerList]);
    }
  };
  const handleSelectRightConnectOption = (rightIndex: number) => {
    if (
      !isAnswered &&
      rightAnswerList[rightIndex].leftIndexConnectedTo === null
    ) {
      setSelectedRightIndex(rightIndex);
    } else if (!isAnswered) {
      leftAnswerList[
        rightAnswerList[rightIndex].leftIndexConnectedTo!
      ].rightIndexConnectedTo = null;
      rightAnswerList[rightIndex].leftIndexConnectedTo = null;
      setLeftAnswerList([...leftAnswerList]);
      setRightAnswerList([...rightAnswerList]);
    }
  };
  useEffect(() => {
    wrapperStyleRef.current = getComputedStyle(
      document.querySelector(".quiz-container")!
    );
  }, []);
  useEffect(() => {
    let isAllConnected = true;
    let isConnectCorrect = true;
    leftAnswerList.forEach((option) => {
      if (option.rightIndexConnectedTo === null) {
        isAllConnected = false;
        isConnectCorrect = false;
        return;
      } else if (
        option.id !== rightAnswerList[option.rightIndexConnectedTo].id
      ) {
        isConnectCorrect = false;
        return;
      }
    });
    setIsAllOptionConnected(isAllConnected);
    setIsConnectCorrect(isConnectCorrect);
  }, [leftAnswerList, rightAnswerList]);
  useEffect(() => {
    let observer: ResizeObserver;
    if (leftConnectIconRef.current && rightConnectIconRef.current) {
      const leftConnectIconRefCurrent = leftConnectIconRef.current;
      const rightConnectIconRefCurrent = rightConnectIconRef.current;
      observer = new ResizeObserver(() => {
        setLeftConnectIconRect(
          leftConnectIconRefCurrent.getBoundingClientRect()
        );
        setRightConnectIconRect(
          rightConnectIconRefCurrent.getBoundingClientRect()
        );
      });
      observer.observe(leftConnectIconRefCurrent);
      return () => {
        leftConnectIconRefCurrent &&
          observer.unobserve(leftConnectIconRefCurrent);
      };
    }
  }, []);
  useEffect(() => {
    if (selectedLeftIndex !== null && selectedRightIndex !== null) {
      leftAnswerList[selectedLeftIndex].rightIndexConnectedTo =
        selectedRightIndex;
      setLeftAnswerList([...leftAnswerList]);

      rightAnswerList[selectedRightIndex].leftIndexConnectedTo =
        selectedLeftIndex;
      setRightAnswerList([...rightAnswerList]);

      setSelectedLeftIndex(null);
      setSelectedRightIndex(null);
    }
  }, [selectedLeftIndex, selectedRightIndex, leftAnswerList, rightAnswerList]);
  useEffect(() => {
    if (leftConnectIconRef.current) {
      setLeftConnectIconRect(
        leftConnectIconRef.current.getBoundingClientRect()
      );
    }
  }, [leftConnectIconRef]);
  useEffect(() => {
    if (rightConnectIconRef.current) {
      setRightConnectIconRect(
        rightConnectIconRef.current.getBoundingClientRect()
      );
    }
  }, [rightConnectIconRef]);
  return (
    <div className="quiz-connect quiz-container">
      <>
        {leftAnswerList.map((item, index) => {
          return item.rightIndexConnectedTo !== null &&
            leftConnectIconRect &&
            rightConnectIconRect ? (
            <svg
              key={item.id}
              style={{
                left: `${leftConnectIconRect.right}px`,
              }}
              width={rightConnectIconRect.left - leftConnectIconRect.right}
            >
              <line
                className={
                  isAnswered
                    ? item.id === rightAnswerList[item.rightIndexConnectedTo].id
                      ? "line--correct"
                      : "line--incorrect"
                    : "line--selected"
                }
                x1="0"
                y1={
                  topToMiddleQuizWrapperDistance! + index * middlePointDistance!
                  // (leftConnectIconRect.bottom - leftConnectIconRect.top) / 2 +
                  // leftConnectIconRect.top
                }
                x2={rightConnectIconRect.left - leftConnectIconRect.right}
                y2={
                  // (rightConnectIconRect.bottom - rightConnectIconRect.top) /
                  //   2 +
                  // rightConnectIconRect.top
                  topToMiddleQuizWrapperDistance! +
                  item.rightIndexConnectedTo * middlePointDistance!
                }
              />
            </svg>
          ) : (
            <React.Fragment key={item.id}></React.Fragment>
          );
        })}
        {leftAnswerList.map((item, index) => (
          <React.Fragment key={leftAnswerList[index].id}>
            <>
              <QuizConnectOptionWrapper
                key={`${leftAnswerList[index].id}-left`}
                ref={index === 0 ? leftConnectIconRef : null}
                isTempSelected={index === selectedLeftIndex}
                isSelected={item.rightIndexConnectedTo !== null}
                isAnswered={isAnswered}
                isCorrect={
                  item.rightIndexConnectedTo !== null
                    ? item.id === rightAnswerList[item.rightIndexConnectedTo].id
                    : false
                }
                onClick={() => {
                  handleSelectLeftConnectOption(index);
                }}
              >
                {leftAnswerList[index].description}
              </QuizConnectOptionWrapper>
              <QuizConnectOptionWrapper
                key={`${rightAnswerList[index].id}-right`}
                ref={index === 0 ? rightConnectIconRef : null}
                isTempSelected={index === selectedRightIndex}
                isSelected={
                  rightAnswerList[index].leftIndexConnectedTo !== null
                }
                isAnswered={isAnswered}
                isCorrect={
                  item.rightIndexConnectedTo !== null
                    ? item.id === rightAnswerList[item.rightIndexConnectedTo].id
                    : false
                }
                onClick={() => {
                  handleSelectRightConnectOption(index);
                }}
              >
                {rightAnswerList[index].description}
              </QuizConnectOptionWrapper>
            </>
          </React.Fragment>
        ))}
      </>
    </div>
  );
};

export default QuizConnectWrapper;
