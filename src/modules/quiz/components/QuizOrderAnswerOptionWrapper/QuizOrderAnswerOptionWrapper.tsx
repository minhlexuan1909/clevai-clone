import "./QuizOrderAnswerOptionWrapper.scss";

import React, { DragEventHandler, MouseEventHandler } from "react";

import QuizOptionWrapper, {
  QuizOptionProps,
} from "../QuizOptionWrapper/QuizOptionWrapper";

interface QuizOrderOptionProps extends QuizOptionProps {
  isMoving: boolean;
  isUnderDraggedOption: boolean;
  onDrop?: DragEventHandler<HTMLDivElement>;
  onDrag?: DragEventHandler<HTMLDivElement>;
  onDragStart?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
  onDragEnter?: DragEventHandler<HTMLDivElement>;
  onDragLeave?: DragEventHandler<HTMLDivElement>;
  onDragEnd?: DragEventHandler<HTMLDivElement>;
  onMouseUp?: MouseEventHandler<HTMLDivElement>;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
}

const QuizOrderAnswerOptionWrapper: React.FC<QuizOrderOptionProps> = (
  props
) => {
  const {
    children,
    isAnswered,
    isCorrect,
    isSelected,
    isMoving,
    isUnderDraggedOption,
    onClick,
    onDrag,
    onDragStart = () => {},
    onDragEnter = () => {},
    onDragLeave = () => {},
    onDragOver = () => {},
    onDragEnd = () => {},
    onDrop = () => {},
    onMouseUp = () => {},
    onMouseDown = () => {},
  } = props;

  return (
    <div
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      className={`quiz-order-answer-option${
        isMoving ? " quiz-order-answer-option--moving" : ""
      }${
        isUnderDraggedOption
          ? " quiz-order-answer-option--under-dragged-option"
          : ""
      }`}
      draggable
    >
      <QuizOptionWrapper
        isSelected={isSelected}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        onClick={onClick}
      >
        {children}
      </QuizOptionWrapper>
    </div>
  );
};

export default QuizOrderAnswerOptionWrapper;
