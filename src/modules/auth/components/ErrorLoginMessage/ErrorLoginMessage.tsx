import React from "react";
import "./ErrorLoginMessage.css";

type Props = {
  children: string;
};

const ErrorLoginMessage: React.FC<Props> = ({ children }) => {
  return (
    <div className="login-form__form-group">
      <img
        className="login-form__error-message-icon"
        alt="WarningIcon"
        src="https://r73troypb4obj.vcdn.cloud/picture/icons/login_warning_icon.svg"
      />
      <span className="login-form__error-message">{children}</span>
    </div>
  );
};

export default ErrorLoginMessage;
