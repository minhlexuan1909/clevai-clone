import "./LoginForm.css";

import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "src/modules/common/components/Spinner/Spinner";

// import { IRootState } from "../../../base/redux/store";
import { login } from "../../redux/actions";
import { LOGIN_STATE } from "../../utils/constants";
import ErrorLoginMessage from "../ErrorLoginMessage/ErrorLoginMessage";
import Button from "src/modules/common/components/Button/Button";
import Checkbox from "src/modules/common/components/Checkbox/Checkbox";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const loginState = useSelector((state: any) => state.auth.state);

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
        <span className="login-form__header-text">Ch??o m???ng b???n</span>
      </div>
      <div className="login-form__form-wrapper">
        <form className="login-form__form" autoComplete="off">
          {loginState === LOGIN_STATE.ERROR && (
            <ErrorLoginMessage>
              S??? ??i???n tho???i ho???c m???t kh???u ch??a ????ng
            </ErrorLoginMessage>
          )}
          {loginState === LOGIN_STATE.TIMEOUT && (
            <ErrorLoginMessage>
              H??? th???ng ??ang qu?? t???i vui l??ng th??? l???i
            </ErrorLoginMessage>
          )}
          <div className="login-form__form-group">
            <input
              type="text"
              placeholder="S??? ??i???n tho???i ???? ????ng k??"
              className={`login-form__input ${
                isValidUsername ? "" : "login-form__input--invalid"
              }`}
              onChange={handleUsernameInputChange}
            />
          </div>
          <div className="login-form__form-group">
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="M???t kh???u ???? nh???n"
              className={`login-form__input ${
                isValidPassword ? "" : "login-form__input--invalid"
              }`}
              onChange={handlePasswordInputChange}
            />
          </div>
          <div className="login-form__form-group login-form__show-password-group">
            {/* <div
              className={`login-form__show-password-checkbox ${
                isShowPassword && "login-form__show-password-checkbox--checked"
              }`}
              onClick={handleToggleShowPassword}
            ></div> */}
            <Checkbox
              isSelected={isShowPassword}
              onClick={handleToggleShowPassword}
            />
            <span
              className={`login-form__show-password-text ${
                isShowPassword && "login-form__show-password-text--checked"
              }`}
              onClick={handleToggleShowPassword}
            >
              Hi???n th??? m???t kh???u
            </span>
          </div>
          <div>
            <Button
              className="login-form__login-btn"
              disableCondition={!isFormValid}
              type={"button"}
              onClick={handleLoginBtn}
            >
              <span>
                {loginState === LOGIN_STATE.CALLING ? <Spinner /> : <></>}
                ????ng nh???p
              </span>
            </Button>
          </div>
        </form>
      </div>
      <div className="login-form__forget">
        <span className="login-forget__forget-text">B???n qu??n m???t kh???u?</span>
        <div className="login-forget__contact">
          <span className="login-forget__contact-text">
            Vui l??ng li??n h??? Hotline:{" "}
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
