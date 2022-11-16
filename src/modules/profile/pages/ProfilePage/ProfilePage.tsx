import React from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Header } from "../../../common/components";

import "./ProfilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../../base/redux/store";
import { useEffect } from "react";
import { getInfo } from "../../redux/actions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const windowHeight = window.innerHeight;
  const token = useSelector(
    (state: IRootState) => state.auth.data.access_token
  );

  useEffect(() => {
    dispatch(getInfo(token));
  }, []);

  return (
    <div style={{ height: windowHeight }} className="profile-page">
      <Header />
      <UserInfo />
    </div>
  );
};

export default ProfilePage;
