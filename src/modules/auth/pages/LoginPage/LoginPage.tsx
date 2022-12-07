import "./LoginPage.css";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IRootState } from "../../../base/redux/store";
import LoginForm from "../../components/LoginForm/LoginForm";
import { resetLoginState } from "../../redux/actions";

// import styles from "./LoginPage.module.css";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(
    (state: IRootState) => state.auth.data.access_token
  );

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [navigate, token]);

  useEffect(() => {
    dispatch(resetLoginState());
  }, []);

  if (token) {
    return <></>;
  }

  const windowHeight = window.innerHeight;

  return (
    <div style={{ height: windowHeight }} className="login-page">
      <div className="login-page__left-side">
        <img
          className="login-page__left-img"
          alt="block-left-background"
          src="https://r73troypb4obj.vcdn.cloud/picture/images/login_background.svg"
        />
      </div>
      <div className="login-page__right-side">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
