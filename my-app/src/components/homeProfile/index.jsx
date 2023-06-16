import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

import imgs from "../../assets";
import styles from "./homeProfile.module.scss";

const cx = classNames.bind(styles);

const HomeProfile = () => {
  const navigate = useNavigate();
  const isUser = Cookies.get('sessionToken');

  useEffect(() => {
    const loader = async () => {
      if (!isUser) {
        toast.error('Please login to access this page');
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
          <div className={cx("profile__content__left","relative")}>
            <div className={cx("profile__content__left__avatar")}>
              <img src={imgs.imgUser} alt="avatar" />
            </div>
            <div className={cx("wrap__btn__update","absolute right-1 bottom-3")}>
                  <button className={cx("btn__update")} type="submit">
                    <i className={cx("fas fa-upload")}></i>
                  </button>
              </div>
          </div>
          <div className={cx("profile__content__right","relative")}>
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
              <div className={cx("wrap__btn__update","absolute right-1 bottom-3")}>
                  <button className={cx("btn__update")} type="submit">
                    <i className={cx("fas fa-user-edit","pr-3")}></i>
                    Update
                  </button>
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
