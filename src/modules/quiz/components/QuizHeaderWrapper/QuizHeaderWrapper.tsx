import React, { useEffect, useRef, useState } from "react";
import "./QuizHeaderWrapper.scss";

export interface LearningObjectProgressBarType {
  totalExpRequired: number;
  currentExp: number;
}

const QuizHeaderWrapper: React.FC<LearningObjectProgressBarType> = (props) => {
  const { totalExpRequired, currentExp } = props;

  const progressBarRef = useRef<null | HTMLDivElement>(null);
  // const progressBarWidth = progressBarRef.current?.offsetWidth;
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0);
  const completedProgressWidth = progressBarWidth
    ? Math.round((currentExp / totalExpRequired) * progressBarWidth)
    : 0;
  console.log(progressBarWidth);
  console.log(completedProgressWidth);
  useEffect(() => {
    if (progressBarRef.current) {
      setProgressBarWidth(progressBarRef.current.offsetWidth);
    }
  }, [progressBarRef]);
  return (
    <div className="learning-object-header">
      <div className="learning-object-header__close-icon">
        <svg width="16.911" height="16.911" viewBox="0 0 16.911 16.911">
          <defs></defs>
          <path
            d="M21.943,5.8a1.277,1.277,0,0,0-1.808,0l-6.272,6.259L7.591,5.783A1.279,1.279,0,0,0,5.783,7.591l6.272,6.272L5.783,20.135a1.279,1.279,0,0,0,1.808,1.808l6.272-6.272,6.272,6.272a1.279,1.279,0,0,0,1.808-1.808l-6.272-6.272,6.272-6.272A1.285,1.285,0,0,0,21.943,5.8Z"
            transform="translate(-5.407 -5.407)"
          ></path>
        </svg>
      </div>
      <div className="learning-object-header__progress-bar">
        <div ref={progressBarRef} className="learning-object-progress-bar">
          <div
            style={{
              width: `${
                progressBarWidth && completedProgressWidth > progressBarWidth
                  ? progressBarWidth
                  : completedProgressWidth
              }px`,
            }}
            className="learning-object-progress-bar__complete"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizHeaderWrapper;
