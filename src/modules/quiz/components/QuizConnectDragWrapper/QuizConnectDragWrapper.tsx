import "./QuizConnectDrapWrapper.scss";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useDispatch, useSelector } from "react-redux";

import { setIsAnsweredCorrect, setIsCompleteAnswer } from "../../redux/actions";
import QuizConnectDragOptionWrapper from "../QuizConnectDragOptionWrapper/QuizConnectDragOptionWrapper";
import { shuffleArray } from "../../utils/shuffleArray";

type LeftOption = {
  id: null | number;
  content: null | string;
  // rightIndexConnectedTo: null | number;
};
type RightOption = {
  id: null | number;
  content: null | string;
  isConnected: boolean;
  // leftIndexConnectedTo: null | number;
};

const QuizConnectDragWrapper = () => {
  const dispatch = useDispatch();

  const COS_45 = useMemo(() => Math.cos(Math.PI / 4), []);

  const answerList = useSelector((state: any) => state.quiz.quiz?.answers);

  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);

  const [leftOptions, setLeftOptions] = useState<LeftOption[]>([]);
  const [rightOptions, setRightOptions] = useState<RightOption[]>([]);

  // Distance from left vertex of triangle to actual right edge of quiz wrapper
  const [triangleWidth, setTriangleWidth] = useState<number | null>(null);
  // Index of right option that is moving
  const [selectedRightIndex, setSelectedRightIndex] = useState<number | null>(
    null
  );
  // Index of left option that is lying under other dragged option
  const [selectedLeftIndex, setSelectedLeftIndex] = useState<number | null>(
    null
  );
  // Position of all left option node (for dectecting collision)
  const [leftOptionPositionList, setLeftOptionPositionList] = useState<
    DOMRect[] | null
  >([]);

  const pairNodesRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

  const repositionLeftOptions = (pairNodes: NodeListOf<HTMLDivElement>) => {
    if (pairNodes && pairNodes.length) {
      const leftOptionPositionList: DOMRect[] = [];
      pairNodes.forEach((pairNode, index) => {
        const pairColumnGap = parseInt(
          getComputedStyle(pairNode).columnGap.slice(0, -2)
        );
        const leftNode: HTMLDivElement = pairNode
          .childNodes[0] as HTMLDivElement;
        const leftNodeRect = leftNode.getBoundingClientRect();
        if (index === 0) {
          const triangleNode = leftNode.childNodes[0] as HTMLDivElement;
          const triangleWidthStr = getComputedStyle(triangleNode).width;
          const triangleWidth = parseInt(triangleWidthStr.slice(0, -2));
          setTriangleWidth(triangleWidth);
        }
        if (rightOptions[index].isConnected && pairColumnGap) {
          leftNodeRect.width += pairColumnGap / 2;
        }
        leftOptionPositionList.push(leftNodeRect);
      });
      setLeftOptionPositionList(leftOptionPositionList);
    }
  };

  const ref = useCallback(
    (pairListNode: HTMLDivElement) => {
      const pairNodes: NodeListOf<HTMLDivElement> =
        pairListNode?.childNodes as NodeListOf<HTMLDivElement>;
      if (pairNodes && pairNodes.length) {
        pairNodesRef.current = pairNodes;
        repositionLeftOptions(pairNodes);
      }
    },
    [
      answerList,
      leftOptions,
      rightOptions,
      // selectedRightIndex,
      // selectedLeftIndex,
    ]
  );

  const collidedLeftOptionIndex = useCallback(
    (x: number, y: number, width: number, height: number): number | null => {
      if (leftOptionPositionList && triangleWidth) {
        let isCollide = null;
        leftOptionPositionList.forEach((position, index) => {
          // triangleWidth / COS_45 / 2: distance from left vertex to wrapper edge
          if (
            position.x + triangleWidth / COS_45 / 2 < x + width &&
            position.x + position.width + triangleWidth / COS_45 / 2 > x &&
            position.y < y + height &&
            position.height + position.y > y
          ) {
            isCollide = index;
            return;
          }
        });
        return isCollide;
      }
      return null;
    },
    [leftOptionPositionList, triangleWidth]
  );

  const handdleDraggableStart = (e: DraggableEvent, ui: DraggableData) => {
    if (pairNodesRef.current) {
      repositionLeftOptions(pairNodesRef.current);
    }
  };

  const handleDraggableDrag = (
    e: DraggableEvent,
    ui: DraggableData,
    index: number
  ) => {
    const target = e.target as HTMLElement;
    const position = target.getBoundingClientRect();
    const collidedIndex = collidedLeftOptionIndex(
      position.x,
      position.y,
      position.width,
      position.height
    );
    setSelectedLeftIndex(collidedIndex);
    setSelectedRightIndex(index);
  };

  const handleDraggableStop = () => {
    if (selectedLeftIndex !== null && selectedRightIndex !== null) {
      // Previous connected option now removed its connection
      rightOptions[selectedLeftIndex].isConnected = false;

      rightOptions[selectedRightIndex].isConnected = true;
      [rightOptions[selectedLeftIndex], rightOptions[selectedRightIndex]] = [
        rightOptions[selectedRightIndex],
        rightOptions[selectedLeftIndex],
      ];

      setRightOptions([...rightOptions]);
      setSelectedLeftIndex(null);
      setSelectedRightIndex(null);
    } else setSelectedRightIndex(null);
  };

  useEffect(() => {
    if (answerList) {
      const leftOptions = answerList.map((option: any) => ({
        id: option.id,
        content: option.content,
        // rightIndexConnectedTo: null,
      }));
      const rightOptions = answerList.map((option: any) => ({
        id: option.id,
        content: option.correct_connect_content,
        isConnected: false,
        // leftIndexConnectedTo: null,
      }));
      shuffleArray(rightOptions);
      setLeftOptions(leftOptions);
      setRightOptions(rightOptions);
    }
  }, [answerList]);

  useEffect(() => {
    if (leftOptions.length && rightOptions.length) {
      let isCompleteAnswer = true;
      let isAnsweredCorrect = true;
      for (let i = 0; i < rightOptions.length; i++) {
        if (!rightOptions[i].isConnected) {
          isCompleteAnswer = false;
          break;
        }
      }
      for (let i = 0; i < rightOptions.length; i++) {
        if (leftOptions[i].id !== rightOptions[i].id) {
          isAnsweredCorrect = false;
          break;
        }
      }
      dispatch(setIsCompleteAnswer(isCompleteAnswer));
      dispatch(setIsAnsweredCorrect(isAnsweredCorrect));
    }
  }, [leftOptions, rightOptions]);
  return (
    <div className="quiz-connect-drag">
      <div ref={ref} className="quiz-connect-drag__pair-list">
        {!!answerList.length && !!leftOptions.length && !!rightOptions.length
          ? answerList.map((option: any, index: number) => (
              <div
                key={option.id}
                className={`quiz-connect-drag__option-pair${
                  rightOptions[index].isConnected &&
                  index !== selectedLeftIndex &&
                  index !== selectedRightIndex
                    ? " quiz-connect-drag__option-pair--connected"
                    : ""
                }`}
              >
                <QuizConnectDragOptionWrapper
                  isDraggable={false}
                  isDragging={index === selectedLeftIndex}
                  isSelected={
                    index === selectedLeftIndex ||
                    rightOptions[index].isConnected
                  }
                  isAnswered={isAnswered}
                  isCorrect={leftOptions[index].id === rightOptions[index].id}
                  onClick={() => {}}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: leftOptions[index]
                        ? leftOptions[index].content!
                        : "",
                    }}
                  ></div>
                </QuizConnectDragOptionWrapper>
                <QuizConnectDragOptionWrapper
                  onDrag={(e: DraggableEvent, ui: DraggableData) =>
                    handleDraggableDrag(e, ui, index)
                  }
                  onDragStart={(e: DraggableEvent, ui: DraggableData) =>
                    handdleDraggableStart(e, ui)
                  }
                  onStop={handleDraggableStop}
                  isDraggable={true}
                  isDragging={index === selectedRightIndex}
                  isSelected={rightOptions[index].isConnected}
                  isAnswered={isAnswered}
                  isCorrect={leftOptions[index].id === rightOptions[index].id}
                  onClick={() => {}}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: rightOptions[index]
                        ? rightOptions[index].content!
                        : "",
                    }}
                  ></div>
                </QuizConnectDragOptionWrapper>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default QuizConnectDragWrapper;
