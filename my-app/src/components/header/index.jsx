import classNames from "classnames/bind";

import imgs from "../../assets";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal";

const cx = classNames.bind(styles);

const Header = () => {
  const [isUser, setIsUser] = useState(false);

  const [isShow, setIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const callBack = (data) => {
    setIsShow(data)
  }

  const showModalRegister = () => {
    setIsLogin(false)
    setIsShow(true)
  }
  const showModalLogin = () => {
    setIsLogin(true)
    setIsShow(true)
  }


  return (
    <div className={cx("header", "p-3")}>
      <div className={cx("header__wrap__container", "container mx-auto")}>
        <div className={cx("header__option")}>
          <a href="/wishlist"  className={cx("header__sidebar")}>
              <button>
                <i className="fas fa-list-ul"></i>
              </button>
              <div className={cx("count__wishlist")}>
                <span>123</span>
              </div>
          </a>
          <div className={cx("header__logo")}>
            <h1>
              <a href={"/"}>3Trees</a>
            </h1>
          </div>
        </div>

        {isUser ? (
          <div className={cx("header__user")}>
            <div className={cx("header__user__img")}>
              <img src={imgs.imgUser}></img>
            </div>
            <div className={cx("header__user__name")}>Bap Hong Pine</div>

            <div className={cx("header__user__icon")}>
              <i className="fas fa-chevron-down"></i>
            </div>

            <div className={cx("header__user__modal")}>
              <div className={cx("header__user__modal__item")}>
                <i className="fas fa-user"></i>
                <span className={cx("header__user__modal__item__text")}>
                  Profile
                </span>
              </div>
              <div className={cx("header__user__modal__item")}>
                <i className="fas fa-list"></i>
                <span className={cx("header__user__modal__item__text")}>
                  wishlist
                  <label className={cx("header__user__modal__item__text__count")}>
                    123
                  </label>
                </span>
              </div>
              <div className={cx("header__user__modal__item")}>
                <i className="fas fa-sign-out-alt"></i>
                <span className={cx("header__user__modal__item__text")}>
                  Logout
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("header__user__notUser")}>
            <div className={cx("header__user__notUser__register")}>
              <button onClick={() => showModalRegister()}>Register</button>
            </div>
            <div className={cx("header__user__notUser__login")}>
              <button onClick={() => showModalLogin()}>Login</button>
            </div>
           {isShow && <Modal isLogin = {isLogin} callBack = {callBack} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
