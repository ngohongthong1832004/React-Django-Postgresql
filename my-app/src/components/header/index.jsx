import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imgs from "../../assets";
import styles from "./header.module.scss";
import Modal from "../modal";

const cx = classNames.bind(styles);

const Header = () => {
  const sessionToken = Cookies.get('sessionToken');
  const sessionIsStaff = Cookies.get('sessionIsStaff');
  const [isUser, setIsUser] = useState(sessionToken);

  const [isShow, setIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const callBack = (data, message) => {
    setIsShow(data)
    setIsUser(message.isUser)
    if(message.status === true){
      toast.success(message.message)
    }
    if(message.status === false){
      toast.error(message.message)
    }
  
  }

  const showModalRegister = () => {
    setIsLogin(false)
    setIsShow(true)
  }
  const showModalLogin = () => {
    setIsLogin(true)
    setIsShow(true)
  }


  const handleLogout = () => {
    window.location.href = '/'
    Cookies.remove('sessionToken');
    Cookies.remove('sessionIsStaff');
    setIsUser(false)
    toast.success("Logout success")
  }

  return (
    
    <div className={cx("header", "p-3")}>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss = {false}
          draggable = {false}
          pauseOnHover = {false}
          theme="dark"
        />
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
            <div className={cx("header__user__name")}>{localStorage.getItem("user_name").split('@')[0]}</div>

            <div className={cx("header__user__icon")}>
              <i className="fas fa-chevron-down"></i>
            </div>

            <div className={cx("header__user__modal")}>
              <a href="/profile" className={cx("header__user__modal__item")}>
                  <i className="fas fa-user"></i>
                  <span className={cx("header__user__modal__item__text")}>
                    Profile
                  </span>
              </a>
              { sessionIsStaff === "true" && <a href={'/manager/user'} className={cx("header__user__modal__item")}>
                <>
                  <i className="fas fa-user-cog"></i>
                  <span className={cx("header__user__modal__item__text")}>
                    Manager
                  </span>
                </>
              </a>}
              <a href={'/wishlist'} className={cx("header__user__modal__item")}>
                  <i className="fas fa-list"></i>
                  <span className={cx("header__user__modal__item__text")}>
                    wishlist
                    <label className={cx("header__user__modal__item__text__count")}>
                      123
                    </label>
                  </span>
              </a>
              <div className={cx("header__user__modal__item")} onClick={handleLogout}>
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
