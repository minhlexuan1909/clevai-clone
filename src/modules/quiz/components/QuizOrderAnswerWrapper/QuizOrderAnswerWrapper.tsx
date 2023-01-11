import "./QuizOrderAnswerWrapper.scss";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import QuizOrderAnswerOptionWrapper from "../QuizOrderAnswerOptionWrapper/QuizOrderAnswerOptionWrapper";
import ButtonContinueWrapper from "../ButtonContinueWrapper/ButtonContinueWrapper";

const QuizOrderAnswerWrapper: React.FC = () => {
  const SET_DROP_DEPTH = "SET_DROP_DEPTH";
  const SET_INIT_DATA = "SET_INIT_DATA";

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case SET_DROP_DEPTH:
        return state.map((dropDepth: number, index: number) => {
          if (index === action.index) {
            return action.dropDepth;
          } else return dropDepth;
        });

      case SET_INIT_DATA:
        return action.data;
      default:
        return state;
    }
  };

  const [optionList, setOptionList] = useState([
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
    {
      id: 11,
      createBy: "admin",
      createDate: null,
      modifiedBy: "admin",
      modifiedDate: null,
      content: "",
      isRightOption: false,
      correctConnectContent: null,
      answerOrder: 3,
      answerBlank: "ba",
    },
    {
      id: 12,
      createBy: "admin",
      createDate: null,
      modifiedBy: "admin",
      modifiedDate: null,
      content: "",
      isRightOption: false,
      correctConnectContent: null,
      answerOrder: 4,
      answerBlank: "bon",
    },
  ]);

  const orderedOptionList = useMemo(
    () =>
      [...optionList].sort(
        (firstItem, secondItem) =>
          firstItem.answerOrder - secondItem.answerOrder
      ),
    [optionList]
  );

  const [data, dispatch] = useReducer(reducer, []);
  const [isAnswered, setIsAnswered] = useState(false);
  // Mark option index that is moving
  const [movingOptionIndex, setMovingOptionIndex] = useState<number | null>(
    null
  );
  // Mark option index that is staying under moved option
  const [underDraggedOptionIndex, setUnderDraggedOptionIndex] = useState<
    number | null
  >(null);
  // Create empty image to erase ghost effect for draggable element
  // Use useState to avoid creating new image everytime compo re-render
  const [image, setImage] = useState(new Image());

  const isAnsweredCorrect = (): boolean => {
    // if (optionList) {
    //   for (let i = 0; i < optionList.length - 1; i++) {
    //     if (optionList[i + 1] < optionList[i]) {
    //       return false;
    //     }
    //   }
    //   return true;
    // }
    // return false;
    if (optionList && orderedOptionList) {
      for (let i = 0; i < optionList.length - 1; i++) {
        if (optionList[i] !== orderedOptionList[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  const handleDragStart = (e: any) => {
    // e.stopPropagation();

    console.log("Hi");
    // remove default drag ghost
    e.dataTransfer.effectedAllowed = "move";
    e.dataTransfer.setDragImage(image, 50000, 50000);

    // custom drag ghost
    let ghostNode = e.target.cloneNode(true);

    ghostNode.style.position = "absolute";

    // show ghost add mouse pointer position
    ghostNode.style.top = e.pageY - e.target.offsetHeight / 2 + "px";
    ghostNode.style.left = e.pageX - e.target.offsetWidth / 2 + "px";

    // add width height to ghost node
    ghostNode.style.height = e.target.offsetHeight + "px";
    ghostNode.style.width = e.target.offsetWidth + "px";

    // add some style
    ghostNode.style.opacity = "0.8";
    ghostNode.style.pointerEvents = "none";

    // add id
    ghostNode.id = "ghostNode";

    document.body.prepend(ghostNode);

    // identify selected item
    // itemRef.current.classList.add("dragstart");

    // if (props.onDragStart) {
    //   props.onDragStart(props.index);
    // }

    // e.dataTransfer.setDragImage(image, 0, 0);
  };
  const handleDragEnter = (e: any, index: number) => {
    // e.preventDefault();
    // e.stopPropagation();
    // dispatch({
    //   type: SET_DROP_DEPTH,
    //   dropDepth: data[index] + 1,
    //   index: index,
    // });
  };
  // Apply pointer-events: none to children to prevent bubbling
  const handleDragLeave = (e: any, index: number) => {
    // e.preventDefault();
    // e.stopPropagation();
    // dispatch({
    //   type: SET_DROP_DEPTH,
    //   dropDepth: data[index] - 1,
    //   index: index,
    // });
    // if (data.dropDepth > 0) return;
    // setUnderDraggedOptionIndex(null);
    // dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDrag = (e: any) => {
    let ghostNode: HTMLDivElement | null = document.querySelector("#ghostNode");
    console.log(e.pageY);
    const ePageY = e.pageY;
    const ePageX = e.pageX;
    const elOffsetHeight = e.target.offsetHeight;
    const elOffsetWidth = e.target.offsetWidth;
    const top = ePageY - elOffsetHeight / 2;
    const left = ePageX - elOffsetWidth / 2;

    // if (ghostNode) {
    // ghostNode!.style.top = ePageY - elOffsetHeight / 2 + "px";
    // ghostNode!.style.left = ePageX - elOffsetWidth / 2 + "px";
    ghostNode!.style.cssText += "; top: " + top + "px; left: " + left + "px";
    // }
  };
  const handleDragOver = (e: any, index: number) => {
    // Avoid onDrop not work
    e.preventDefault();
    // setUnderDraggedOptionIndex(index);
  };
  const handleDragEnd = (e: any) => {
    setUnderDraggedOptionIndex(null);
    setMovingOptionIndex(null);

    // remove ghost node
    // document.querySelector("#ghostNode")!.remove();
    // remove selected item style
    // itemRef.current.classList.remove("dragstart");
  };
  const handleDrop = (e: any, index: number) => {
    setUnderDraggedOptionIndex(null);
    setMovingOptionIndex(null);
    // Swap option
    [optionList[index], optionList[movingOptionIndex!]] = [
      optionList[movingOptionIndex!],
      optionList[index],
    ];
    setOptionList([...optionList]);
  };
  const handleMouseUp = () => {
    setUnderDraggedOptionIndex(null);
    setMovingOptionIndex(null);
  };
  const handleOptionHold = (index: number) => {
    // setMovingOptionIndex(index);
  };
  const handleButtonContinueClick = () => {
    setIsAnswered(true);
  };
  useEffect(() => {
    dispatch({ type: SET_INIT_DATA, data: optionList.map((option) => 0) });
  }, [optionList]);
  return (
    <div className="quiz-order-answer quiz-container">
      {optionList.map((item, index) => (
        <QuizOrderAnswerOptionWrapper
          key={item.id}
          onDrop={(e) => handleDrop(e, index)}
          onDrag={(e) => handleDrag(e)}
          onDragStart={(e) => handleDragStart(e)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragLeave={(e) => handleDragLeave(e, index)}
          onDragEnd={handleDragEnd}
          onMouseUp={handleMouseUp}
          onMouseDown={() => handleOptionHold(index)}
          isUnderDraggedOption={index === underDraggedOptionIndex}
          isMoving={index === movingOptionIndex}
          isSelected={
            (data[index] > 0 && index !== movingOptionIndex) || isAnswered
          }
          isCorrect={item.answerOrder === orderedOptionList[index].answerOrder}
          isAnswered={isAnswered}
          onClick={() => {}}
        >
          {item.answerBlank}
        </QuizOrderAnswerOptionWrapper>
      ))}
      <ButtonContinueWrapper onClick={handleButtonContinueClick}>
        Tiếp tục
      </ButtonContinueWrapper>
    </div>
  );
};

export default QuizOrderAnswerWrapper;
