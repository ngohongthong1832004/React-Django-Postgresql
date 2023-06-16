import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

import imgs from "../../assets";
import styles from "./homeProfile.module.scss";

const cx = classNames.bind(styles);

const HomeProfile = () => {
  const navigate = useNavigate();
  const isUser = Cookies.get('sessionToken');

  useEffect(() => {
    const loader = async () => {
      if (!isUser) {
        return navigate("/");
      }
      return null;
    };
    loader();
  }, []);  

  return (
    <div className={cx("profile", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
      {isUser && <>
        <h1>Profile Site</h1>
        <div className={cx("profile__content")}>
          <div className={cx("profile__content__left")}>
            <div className={cx("profile__content__left__avatar")}>
              <img src={imgs.imgUser} alt="avatar" />
            </div>
          </div>
          <div className={cx("profile__content__right")}>
            <div className = {cx("profile__content__right__title")}>
              <h2>Basic Profile</h2>
            </div>
            <div className = {cx("profile__content__right__info")}>
              <div className={cx("profile__content__right__info____firstName")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>First name </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>bap hong</p>
                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info____lastName")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>Last name </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>Thong</p>
                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info____lastName")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>Email </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>baphongpine@gmail.com</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("analytics")}>
          <div className={cx("analytics__item")}>
            <div className={cx("analytics__item__title")}>My wishlist</div>
            <div className={cx("analytics__item__number")}>0</div>
          </div>
          <div className={cx("analytics__item")}>
            <div className={cx("analytics__item__title")}>My Likes</div>
            <div className={cx("analytics__item__number")}>0</div>
          </div>
          <div className={cx("analytics__item")}>
            <div className={cx("analytics__item__title")}>My comments</div>
            <div className={cx("analytics__item__number")}>0</div>
          </div>
        </div>
      </>}
    </div>
  );
};

export default HomeProfile;
