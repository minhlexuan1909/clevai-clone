import "./LoginForm.css";

import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "src/components/Spinner/Spinner";

import { IRootState } from "../../../base/redux/store";
import { login } from "../../redux/actions";
import { LOGIN_STATE } from "../../utils/constants";

const LoginForm: React.FC = () => {
  // Hệ thống đang quá tải vui lòng thử lại

  const dispatch = useDispatch();

  const loginState = useSelector((state: IRootState) => state.auth.state);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isTriedLogin, setIsTriedLogin] = useState<boolean>(false);

  const isFormValid =
    username !== "" && password !== "" && loginState !== LOGIN_STATE.CALLING;
  const isValidUsername = username !== "" || !isTriedLogin;
  const isValidPassword = password !== "" || !isTriedLogin;

  const handleToggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleUsernameInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setUsername(target.value);
  };

  const handlePasswordInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  const handleLoginBtn = () => {
    setIsTriedLogin(true);
    if (isFormValid) {
      dispatch(login({ usernameOrEmail: username, password: password }));
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__header">
        <img
          className="login-form__logo"
          src="https://r73troypb4obj.vcdn.cloud/picture/icons/login_clevai_logo.svg"
          alt="logo"
        />
        <span className="login-form__header-text">Chào mừng bạn</span>
      </div>
      <div className="login-form__form-wrapper">
        <form className="login-form__form" autoComplete="off">
          <div className="login-form__form-group">
            <img
              className="login-form__error-message-icon"
              alt="WarningIcon"
              src="https://r73troypb4obj.vcdn.cloud/picture/icons/login_warning_icon.svg"
            />
            <span className="login-form__error-message">
              Số điện thoại hoặc mật khẩu chưa đúng
            </span>
          </div>
          <div className="login-form__form-group">
            <input
              type="text"
              placeholder="Số điện thoại đã đăng ký"
              className={`login-form__input ${
                isValidUsername ? "" : "login-form__input--invalid"
              }`}
              onChange={handleUsernameInputChange}
            />
          </div>
          <div className="login-form__form-group">
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Mật khẩu đã nhận"
              className={`login-form__input ${
                isValidPassword ? "" : "login-form__input--invalid"
              }`}
              onChange={handlePasswordInputChange}
            />
          </div>
          <div className="login-form__form-group login-form__show-password-group">
            <div
              className={`login-form__show-password-checkbox ${
                isShowPassword && "login-form__show-password-checkbox--checked"
              }`}
              onClick={handleToggleShowPassword}
            ></div>
            <span
              className={`login-form__show-password-text ${
                isShowPassword && "login-form__show-password-text--checked"
              }`}
              onClick={handleToggleShowPassword}
            >
              Hiển thị mật khẩu
            </span>
          </div>
          <div>
            <button
              type="button"
              disabled={!isFormValid || loginState === LOGIN_STATE.CALLING}
              className={`login-form__login-btn btn ${
                isFormValid ? "btn--active" : "btn--disabled"
              }`}
              onClick={handleLoginBtn}
            >
              {loginState === LOGIN_STATE.CALLING ? <Spinner /> : <></>}
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <div className="login-form__forget">
        <span className="login-forget__forget-text">Bạn quên mật khẩu?</span>
        <div className="login-forget__contact">
          <span className="login-forget__contact-text">
            Vui lòng liên hệ Hotline:{" "}
          </span>
          <a className="login-forget__contact-num" href="tel:0988911160">
            0988 911 160
          </a>
          <span>/</span>
          <a className="login-forget__contact-num" href="tel:19002674">
            19002674
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
