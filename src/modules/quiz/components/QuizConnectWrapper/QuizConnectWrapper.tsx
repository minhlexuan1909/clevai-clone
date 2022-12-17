import "./QuizConnectWrapper.scss";

import React, { useCallback, useEffect, useRef, useState } from "react";

import QuizConnectOptionWrapper from "../QuizConnectOptionWrapper/QuizConnectOptionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setIsCompleteAnswer, setIsAnsweredCorrect } from "../../redux/actions";
import { shuffleArray } from "../../utils/shuffleArray";

type LeftAnswer = {
  id: number;
  description: string;
  rightIndexConnectedTo: null | number;
};
type RightAnswer = {
  id: number;
  description: string;
  leftIndexConnectedTo: null | number;
};

const QuizConnectWrapper = () => {
  const dispatch = useDispatch();

  const wrapperStyleRef = useRef<CSSStyleDeclaration | null>(null);

  const leftOptionRef: any = useCallback((node: null | HTMLDivElement) => {
    if (node !== null) {
      setleftOptionRect(node.getBoundingClientRect());
      setLeftOptionNode(node);
    }
  }, []);
  const rightOptionRef: any = useCallback((node: null | HTMLDivElement) => {
    if (node !== null) {
      setrightOptionRect(node.getBoundingClientRect());
      setRightOptionNode(node);
    }
  }, []);
  const [leftOptionNode, setLeftOptionNode] = useState<null | HTMLDivElement>(
    null
  );
  const [rightOptionNode, setRightOptionNode] = useState<null | HTMLDivElement>(
    null
  );

  const answerList = useSelector((state: any) => state.quiz.quiz?.answers);
  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);
  const [leftOptionRect, setleftOptionRect] = useState<null | DOMRect>(null);
  const [rightOptionRect, setrightOptionRect] = useState<null | DOMRect>(null);
  const rowGapStyle = wrapperStyleRef.current?.rowGap;
  const quizWrapperHeight = leftOptionRect ? leftOptionRect.height : null;

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

  const [leftAnswerList, setLeftAnswerList] = useState<LeftAnswer[]>([]);
  const [rightAnswerList, setRightAnswerList] = useState<RightAnswer[]>([]);

  useEffect(() => {
    if (answerList) {
      const leftAnswerList = answerList.map((item: any) => {
        return {
          id: item.id,
          description: item.content,
          rightIndexConnectedTo: null,
        };
      });
      const rightAnswerList = answerList.map((item: any) => {
        return {
          id: item.id,
          description: item.correctConnectContent,
          leftIndexConnectedTo: null,
        };
      });
      setLeftAnswerList(leftAnswerList);
      shuffleArray(rightAnswerList);
      setRightAnswerList(rightAnswerList);
    }
  }, [answerList]);
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
      document.querySelector(".quiz-option-container")!
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
    dispatch(setIsCompleteAnswer(isAllConnected));
    dispatch(setIsAnsweredCorrect(isConnectCorrect));
  }, [dispatch, leftAnswerList, rightAnswerList]);

  // Re-positioning line
  useEffect(() => {
    let observer: ResizeObserver;
    if (leftOptionNode && rightOptionNode) {
      observer = new ResizeObserver(() => {
        setleftOptionRect(leftOptionNode.getBoundingClientRect());
        setrightOptionRect(rightOptionNode.getBoundingClientRect());
      });
      observer.observe(leftOptionNode);
      return () => {
        leftOptionNode && observer.unobserve(leftOptionNode);
      };
    }
  }, [leftOptionNode, rightOptionNode]);
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
  return (
    <div className="quiz-connect quiz-option-container">
      <>
        {leftAnswerList.map((item, index) => {
          return item.rightIndexConnectedTo !== null &&
            leftOptionRect &&
            rightOptionRect ? (
            <svg
              key={item.id}
              style={{
                left: `${leftOptionRect.right - leftOptionRect.left}px`,
              }}
              width={rightOptionRect.left - leftOptionRect.right}
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
                  // (leftOptionRect.bottom - leftOptionRect.top) / 2 +
                  // leftOptionRect.top
                }
                x2={rightOptionRect.left - leftOptionRect.right}
                y2={
                  // (rightOptionRect.bottom - rightOptionRect.top) /
                  //   2 +
                  // rightOptionRect.top
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
                ref={index === 0 ? leftOptionRef : null}
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: leftAnswerList[index].description,
                  }}
                ></div>
              </QuizConnectOptionWrapper>
              <QuizConnectOptionWrapper
                key={`${rightAnswerList[index].id}-right`}
                ref={index === 0 ? rightOptionRef : null}
                isTempSelected={index === selectedRightIndex}
                isSelected={
                  rightAnswerList[index].leftIndexConnectedTo !== null
                }
                isAnswered={isAnswered}
                isCorrect={
                  // item.rightIndexConnectedTo !== null
                  //   ? item.id === rightAnswerList[item.rightIndexConnectedTo].id
                  //   : false
                  rightAnswerList[index].leftIndexConnectedTo !== null
                    ? rightAnswerList[index].id ===
                      leftAnswerList[
                        rightAnswerList[index].leftIndexConnectedTo!
                      ].id
                    : false
                }
                onClick={() => {
                  handleSelectRightConnectOption(index);
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: rightAnswerList[index].description,
                  }}
                ></div>
              </QuizConnectOptionWrapper>
            </>
          </React.Fragment>
        ))}
      </>
    </div>
  );
};

export default QuizConnectWrapper;
