import React from "react";
import "./Checkbox.scss";

type Props = {
  isSelected: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Checkbox: React.FC<Props> = (props) => {
  const { isSelected, onClick } = props;
  return (
    <div
      className={`checkbox${isSelected && " checkbox--checked"}`}
      onClick={onClick}
    ></div>
  );
};

export default Checkbox;
