import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../StarIcon/StarIcon";
import "./Header.css";
import Tooltip from "../Tooltip/Tooltip";
import ChestNut from "../ChestNut/ChestNut";

const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">
        <img
          alt="clevai-logo"
          className="header__logo"
          src="https://r73troypb4obj.vcdn.cloud/picture/icons/common_logo.svg"
        />
      </Link>
      <nav className="header__nav">
        <Link to="/profile" className="header-nav__item">
          <div className="header-nav-item__icon header-nav-item__home-icon"></div>
          <span className="header-nav-item__text">Trang chủ</span>
        </Link>
        <Link to="/profile" className="header-nav__item">
          <div className="header-nav-item__icon header-nav-item__learn-icon"></div>
          <span className="header-nav-item__text">Chương trình học</span>
        </Link>
        <Link to="/profile" className="header-nav__item">
          <div className="header-nav-item__icon header-nav-item__store-icon"></div>
          <span className="header-nav-item__text">Cửa hàng</span>
        </Link>
        <Link to="/profile" className="header-nav__item">
          <div className="header-nav-item__icon header-nav-item__report-icon"></div>
          <span className="header-nav-item__text">Báo cáo</span>
        </Link>
      </nav>
      <div className="header__student-info">
        <div className="header-student-info__badge-pill">TRÌNH ĐỘ C2</div>
        <Tooltip
          style={{ height: "100%" }}
          content={
            <div className="header-student-info__tooltip header-student-info__star-tooltip">
              <StarIcon width="46px" height="44px" />
              <div className="header-tooltip__description">
                <p className="header-tooltip__title">Ngôi sao</p>
                <p className="header-tooltip__detail">
                  Hoàn thành dạng bài để nhận sao
                </p>
              </div>
            </div>
          }
        >
          <div className="header-student-info__item header-student-info__star-info">
            <StarIcon width={"29px"} height={"28px"} />
            <span>945</span>
          </div>
        </Tooltip>
        <Tooltip
          style={{ height: "100%" }}
          content={
            <div className="header-student-info__tooltip header-student-info__star-tooltip">
              <ChestNut width="46px" height="44px" />
              <div className="header-tooltip__description">
                <p className="header-tooltip__title">Ngôi sao</p>
                <p className="header-tooltip__detail">
                  Hoàn thành dạng bài để nhận sao
                </p>
              </div>
            </div>
          }
        >
          <div className="header-student-info__item header-student-info__star-info">
            <ChestNut width={"29px"} height={"28px"} />
            <span>945</span>
          </div>
        </Tooltip>
        <Tooltip
          style={{ height: "100%" }}
          contentStyle={{ width: "200px", left: "-80px" }}
          content={
            <div className="header-student-info__tooltip header-student-info__detail-tooltip">
              <div className="header-detail-tooltip__item header-detail-tooltip__name">
                <p>Nguyễn Tiến Nam</p>
              </div>
              <div className="header-detail-tooltip__line"></div>
              <div className="header-detail-tooltip__item header-detail-tooltip__item--hover">
                <p>Tài khoản của tôi</p>
              </div>
              <div className="header-detail-tooltip__line"></div>
              <div className="header-detail-tooltip__item header-detail-tooltip__item--hover">
                <p>Đăng xuất</p>
              </div>
            </div>
          }
        >
          <div className="header-student-info__item header-student-info__detail">
            <div className="header-detail__wrapper">
              <img
                src="https://r73troypb4obj.vcdn.cloud/user/profile/avatar/11196/06022021/avatar1622569674347"
                alt="avatar"
                className="header-detail__avatar"
              />
              <div className="header-detail__name-grade">
                <p className="header-detail__name">Nam</p>
                <p className="header-detail__grade">Khối 5</p>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
