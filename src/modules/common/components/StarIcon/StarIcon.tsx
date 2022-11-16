import React from "react";
import "./StarIcon.css";

type Props = {
  width?: string;
  height?: string;
};

const StarIcon: React.FC<Props> = (style) => {
  return (
    <svg style={style} className="star-icon" viewBox="0 0 29.298 28">
      <path
        d="M18.092,27.022l7.1,4.3a1.708,1.708,0,0,0,2.551-1.849l-1.883-8.08,6.283-5.444a1.708,1.708,0,0,0-.976-3l-8.269-.7L19.667,4.612a1.713,1.713,0,0,0-3.15,0l-3.236,7.618-8.269.7a1.708,1.708,0,0,0-.976,3l6.283,5.444-1.883,8.08A1.708,1.708,0,0,0,10.987,31.3Z"
        transform="translate(-3.443 -3.572)"
      ></path>
    </svg>
  );
};

export default StarIcon;
