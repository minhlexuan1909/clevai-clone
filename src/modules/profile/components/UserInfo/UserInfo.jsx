import React from "react";
import "./UserInfo.css";
import Card from "src/modules/common/components/Card/Card";
import { StarIcon } from "src/modules/common";
import ChestNut from "src/modules/common/components/ChestNut/ChestNut";

const UserInfo = () => {
  return (
    <div className="user-info">
      <Card className="user-info__detail">
        <div className="user-detail__left-wrapper">
          <img
            className="user-detail__avatar"
            src="https://r73troypb4obj.vcdn.cloud/user/profile/avatar/11196/06022021/avatar1622569674347"
            alt="avatar"
          />
          <div className="user-detail__base-detail">
            <span className="user-detail__name">Nguyễn Tiến Nam</span>
            <div className="user-detail__phone-grade">
              <span className="user-detail__phone">0915550448</span>
              <div className="user-detail__grade">
                <div className="user-detail__dot"></div>
                <span className="user-detail__grade-text">Khối 5</span>
              </div>
            </div>
            <span className="user-detail__rank">Clevai Mars</span>
          </div>
        </div>
        <div className="user-detail__right-wrapper">
          <div className="user-detail__date user-detail__join-date-wrapper">
            <span className="user-detail__date-text">Tham gia Clevai</span>
            <span className="user-detail__date-detail">01/06/2021</span>
          </div>
          <div className="user-detail__date user-detail__out-date-wrapper">
            <span className="user-detail__date-text">Hết hạn tài khoản</span>
            <span className="user-detail__date-detail">13/12/2022</span>
          </div>
        </div>
      </Card>
      <div className="user-info__other-detail">
        <Card className="user-other-detail__info-block">
          <StarIcon width="60px" height="60px" />
          <div className="user-other-detail__detail-wrapper">
            <span className="user-other-detail__label">150952</span>
            <span className="user-other-detail__description">Tổng sao</span>
          </div>
        </Card>
        <Card className="user-other-detail__info-block">
          <ChestNut width="60px" height="60px" />
          <div className="user-other-detail__detail-wrapper">
            <span className="user-other-detail__label">150952</span>
            <span className="user-other-detail__description">Tổng hạt dẻ</span>
          </div>
        </Card>
        <Card className="user-other-detail__info-block">
          <img
            className="user-other-detail__exp-icon"
            src="https://r73troypb4obj.vcdn.cloud/picture/icons/profile_icon_XP.svg"
            alt="xp-icon"
          />
          <div className="user-other-detail__detail-wrapper">
            <span className="user-other-detail__label">150952</span>
            <span className="user-other-detail__description">Tổng điểm KN</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;
