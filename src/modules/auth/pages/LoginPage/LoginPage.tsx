import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
// import styles from "./LoginPage.module.css";
import "./LoginPage.css";

function LoginPage() {
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
