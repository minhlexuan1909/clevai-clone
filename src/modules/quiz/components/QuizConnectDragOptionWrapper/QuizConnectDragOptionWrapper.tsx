import React, { DragEventHandler, useEffect, useRef, useState } from "react";
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from "react-draggable";
import { useSelector } from "react-redux";
import QuizOptionWrapper from "../QuizOptionWrapper/QuizOptionWrapper";
import {
  QuizOptionProps,
  QuizOptionRef,
} from "../QuizOptionWrapper/QuizOptionWrapper";
import "./QuizConnectDragOptionWrapper.scss";

interface QuizConnecDragOptionProps extends QuizOptionProps {
  onDrag?: DraggableEventHandler;
  onStop?: DraggableEventHandler;
  onDragStart?: DraggableEventHandler;
  onDragOver?: DragEventHandler;
  onDrop?: DragEventHandler;
  isDragging: boolean;
  isDraggable: boolean;
}

const QuizConnectDragOptionWrapper: React.FC<QuizConnecDragOptionProps> = (
  props
) => {
  const {
    onDragStart = () => {},
    onDragOver = () => {},
    onDrag = () => {},
    onStop = () => {},
    isDraggable,
    isDragging,
    isSelected,
    isCorrect,
    children,
    onClick,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const isAnswered = useSelector((state: any) => state.quiz.isAnswered);

  const handleDraggableDrag = (e: DraggableEvent, ui: DraggableData) => {
    onDrag(e, ui);
  };

  const handleDraggableStop = (e: DraggableEvent, ui: DraggableData) => {
    onStop(e, ui);
  };
  const handleDraggableStart = (e: DraggableEvent, ui: DraggableData) => {
    onDragStart(e, ui);
  };

  if (isDraggable)
    return (
      <Draggable
        position={{ x: 0, y: 0 }}
        onStart={handleDraggableStart}
        onStop={handleDraggableStop}
        onDrag={handleDraggableDrag}
        nodeRef={ref}
      >
        <div
          style={isAnswered ? { pointerEvents: "none" } : {}}
          ref={ref}
          {...rest}
          className={`quiz-connect-drag-option${
            isDragging
              ? " quiz-connect-drag-option--dragging quiz-connect-drag-option--right-dragging"
              : " quiz-connect-drag-option--stopped"
          }${isSelected ? " quiz-connect-drag-option--selected" : ""}`}
        >
          <div
            className={`quiz-connect-drag-option__triangle quiz-connect-drag-option__right-triangle${
              isDragging
                ? " quiz-connect-drag-option__right-triangle--dragging"
                : ""
            }${
              isSelected && !isDragging && !isAnswered
                ? " quiz-connect-drag-option__right-triangle--selected"
                : ""
            }${
              isAnswered
                ? isCorrect
                  ? " quiz-connect-drag-option__right-triangle--correct"
                  : " quiz-connect-drag-option__right-triangle--incorrect"
                : ""
            }`}
          ></div>
          <QuizOptionWrapper
            isSelected={isDragging || isSelected}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            onClick={onClick}
          >
            {children}
          </QuizOptionWrapper>
        </div>
      </Draggable>
    );

  return (
    <div
      ref={ref}
      className={`quiz-connect-drag-option quiz-connect-drag-left-option${
        isDragging
          ? " quiz-connect-drag-option--dragging"
          : " quiz-connect-drag-option--stopped"
      }`}
    >
      <div
        className={`quiz-connect-drag-option__triangle quiz-connect-drag-option__left-triangle${
          isDragging ? " quiz-connect-drag-option__left-triangle--dragging" : ""
        }`}
      ></div>
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

export default QuizConnectDragOptionWrapper;
