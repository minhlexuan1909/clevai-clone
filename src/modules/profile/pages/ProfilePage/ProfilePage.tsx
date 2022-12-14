import "./ProfilePage.css";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { IRootState } from "../../../base/redux/store";
import { Header } from "../../../common/components";
import UserInfo from "../../components/UserInfo/UserInfo";
import { getInfo } from "../../redux/actions";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const windowHeight = window.innerHeight;
  const token = useSelector((state: any) => state.auth.data.access_token);

  useEffect(() => {
    dispatch(getInfo(token));
    if (!token) {
      navigate("/login");
    }
  }, [dispatch, navigate, token]);

  return (
    <div style={{ height: windowHeight }} className="profile-page">
      <Header />
      <UserInfo />
    </div>
  );
};

export default ProfilePage;
