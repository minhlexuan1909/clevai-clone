import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../../base/redux/store";
import { useEffect } from "react";

type Props = {
  children: JSX.Element;
};
const PrivateRoute: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const token = useSelector(
    (state: IRootState) => state.auth.data.access_token
  );
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  if (!token) {
    return <></>;
  }
  return <>{children}</>;
};

export default PrivateRoute;
