import React from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Header } from "../../../common/components";

import "./ProfilePage.css";

const ProfilePage = () => {
  const windowHeight = window.innerHeight;
  return (
    <div style={{ height: windowHeight }} className="profile-page">
      <Header />
      <UserInfo />
    </div>
  );
};

export default ProfilePage;
