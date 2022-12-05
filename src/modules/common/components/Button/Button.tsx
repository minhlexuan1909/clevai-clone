import "./Button.css";

import React from "react";

type Props = {
  children?: JSX.Element | string;
  type: "button" | "submit" | "reset";
  disableCondition?: boolean;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = (props) => {
  const { children, type, disableCondition, className, onClick } = props;
  return (
    <button
      className={`${className} ${
        disableCondition ? "btn--disabled" : "btn--active"
      } btn`}
      type={type}
      disabled={disableCondition}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
