import React from "react";
import "./Card.css";

type Props = {
  className?: string;
  style?: object;
  children: JSX.Element;
};

const Card: React.FC<Props> = (props) => {
  const { className, style, children } = props;

  return (
    <div style={style} className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
