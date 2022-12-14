import "./UserInfo.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { IRootState } from "src/modules/base/redux/store";
import { StarIcon } from "src/modules/common";
import Card from "src/modules/common/components/Card/Card";
import ChestNut from "src/modules/common/components/ChestNut/ChestNut";
import LoadDataError from "src/modules/common/components/LoadDataError/LoadDataError";
import Spinner from "src/modules/common/components/Spinner/Spinner";

import { convertDate } from "../../../common/utils";
import { getInfo } from "../../redux/actions";
import { GET_INFO_STATE } from "../../utils/constants";

const UserInfo = () => {
  const dispatch = useDispatch();

  const userLoginData = useSelector((state: any) => state.auth.data);
  const token = useSelector((state: any) => state.auth.data.access_token);
  const userInfo = useSelector((state: any) => state.profile.data);
  const profileState = useSelector((state: any) => state.profile.state);
  const isLoadInfoError = profileState === GET_INFO_STATE.ERROR;
  const isLoadingInfo = profileState === GET_INFO_STATE.CALLING;
  const isActive = userInfo?.default_grade_subject?.status === "ACTIVE";
  const handleReload = () => {
    dispatch(getInfo(token));
  };
  return (
    <div className="user-info">
      <Card className="user-info__detail">
        {isLoadInfoError ? (
          <LoadDataError
            iconWidth="94px"
            iconHeight="60px"
            onReload={handleReload}
          />
        ) : (
          <>
            {isLoadingInfo ? (
              <div className="spinner-wrapper">
                <Spinner />
              </div>
            ) : (
              <>
                <div className="user-detail__left-wrapper">
                  <img
                    style={isActive ? { borderColor: "#449570" } : {}}
                    className="user-detail__avatar"
                    src={userLoginData?.avatar}
                    alt="avatar"
                  />
                  <div className="user-detail__base-detail">
                    <span className="user-detail__name">
                      {userLoginData?.full_name}
                    </span>
                    <div className="user-detail__phone-grade">
                      <span className="user-detail__phone">
                        {userLoginData?.principal}
                      </span>
                      <div className="user-detail__grade">
                        <div className="user-detail__dot"></div>
                        <span className="user-detail__grade-text">
                          {userInfo?.default_grade_subject?.grade_original_name}
                        </span>
                      </div>
                    </div>
                    <span className="user-detail__rank">Clevai Mars</span>
                  </div>
                </div>
                <div className="user-detail__right-wrapper">
                  <div className="user-detail__date user-detail__join-date-wrapper">
                    <span className="user-detail__date-text">
                      Tham gia Clevai
                    </span>
                    <span className="user-detail__date-detail">
                      {convertDate(userInfo?.first_start_date)}
                    </span>
                  </div>
                  <div className="user-detail__date user-detail__out-date-wrapper">
                    <span className="user-detail__date-text">
                      Hết hạn tài khoản
                    </span>
                    <span className="user-detail__date-detail">
                      {convertDate(userInfo?.default_grade_subject?.end_date)}
                    </span>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Card>
      <div className="user-info__other-detail">
        <Card className="user-other-detail__info-block">
          {isLoadInfoError ? (
            <>
              <LoadDataError
                iconWidth="94px"
                iconHeight="60px"
                onReload={handleReload}
              />
            </>
          ) : (
            <>
              {isLoadingInfo ? (
                <div className="spinner-wrapper">
                  <Spinner />
                </div>
              ) : (
                <>
                  <StarIcon width="60px" height="60px" />
                  <div className="user-other-detail__detail-wrapper">
                    <span className="user-other-detail__label">
                      {userInfo?.amount_of_star}
                    </span>
                    <span className="user-other-detail__description">
                      Tổng sao
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </Card>
        <Card className="user-other-detail__info-block">
          {isLoadInfoError ? (
            <>
              <LoadDataError
                iconWidth="94px"
                iconHeight="60px"
                onReload={handleReload}
              />
            </>
          ) : (
            <>
              {isLoadingInfo ? (
                <div className="spinner-wrapper">
                  <Spinner />
                </div>
              ) : (
                <>
                  {" "}
                  <ChestNut width="60px" height="60px" />
                  <div className="user-other-detail__detail-wrapper">
                    <span className="user-other-detail__label">
                      {userInfo?.amount_of_chestnut}
                    </span>
                    <span className="user-other-detail__description">
                      Tổng hạt dẻ
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </Card>
        <Card className="user-other-detail__info-block">
          {isLoadInfoError ? (
            <>
              <LoadDataError
                iconWidth="94px"
                iconHeight="60px"
                onReload={handleReload}
              />
            </>
          ) : (
            <>
              {isLoadingInfo ? (
                <div className="spinner-wrapper">
                  <Spinner />
                </div>
              ) : (
                <>
                  <img
                    className="user-other-detail__exp-icon"
                    src="https://r73troypb4obj.vcdn.cloud/picture/icons/profile_icon_XP.svg"
                    alt="xp-icon"
                  />
                  <div className="user-other-detail__detail-wrapper">
                    <span className="user-other-detail__label">
                      {userInfo?.amount_of_xp}
                    </span>
                    <span className="user-other-detail__description">
                      Tổng điểm KN
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;
