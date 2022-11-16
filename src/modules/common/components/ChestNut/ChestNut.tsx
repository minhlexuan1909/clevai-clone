import React from "react";
import "./ChestNut.css";
type Props = {
  width?: string;
  height?: string;
};

const ChestNut: React.FC<Props> = (style) => {
  return (
    <svg style={style} className="chest-nut-icon" viewBox="0 0 22.521 28">
      <path
        d="M19.45,3.267H15.367V1.05A1.046,1.046,0,0,0,14.317,0H13.15A1.046,1.046,0,0,0,12.1,1.05V3.267H7.783A5.477,5.477,0,0,0,2.3,8.75v1.4A1.046,1.046,0,0,0,3.35,11.2H23.767a1.046,1.046,0,0,0,1.05-1.05V8.75A5.307,5.307,0,0,0,19.45,3.267Zm4.433,9.917H3.35v3.15A11.73,11.73,0,0,0,13.617,28,11.73,11.73,0,0,0,23.883,16.333Z"
        transform="translate(-2.3)"
      ></path>
    </svg>
  );
};

export default ChestNut;
