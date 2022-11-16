import React from "react";
import "./Tooltip.css";
import { useState } from "react";

type Props = {
  children: JSX.Element;
  content: JSX.Element;
  style?: object;
  contentStyle?: object;
};

const Tooltip: React.FC<Props> = (props) => {
  const { children, content, style, contentStyle } = props;
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);

  const handleShowTooltip = () => {
    setIsShowTooltip(true);
  };
  const handleHideTooltip = () => {
    setIsShowTooltip(false);
  };
  return (
    <div
      className="tooltip"
      style={style}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      <>{children}</>
      {isShowTooltip && (
        <div
          className="tooltip__content tooltip__content--bottom"
          style={contentStyle}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
