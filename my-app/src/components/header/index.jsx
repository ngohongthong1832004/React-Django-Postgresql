import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imgs from "../../assets";
import styles from "./header.module.scss";
import Modal from "../modalRegister";

const cx = classNames.bind(styles);

const Header = () => {
  const sessionToken = Cookies.get('sessionToken');
  const sessionIsStaff = Cookies.get('sessionIsStaff');
  const userInfo = Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : {};
  const [isUser, setIsUser] = useState(sessionToken);

  const [isShow, setIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClickWishlist = (e) => {
    e.preventDefault()
    if(!sessionToken){
      toast.error("Please login to access this page")
      return
    }
    window.location.href = '/wishlist'
  }


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
    Cookies.remove('sessionEmail');
    Cookies.remove('userInfo');
    setIsUser(false)
    toast.success("Logout success")
  }

  console.log("userInfo :", userInfo)

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
          limit={3}
          theme="dark"
        />
      <div className={cx("header__wrap__container", "container mx-auto")}>
        <div className={cx("header__option")}>
          <div onClick={handleClickWishlist} className={cx("header__sidebar")}>
              <button>
                <i className="fas fa-list-ul"></i>
              </button>
              { isUser && <div className={cx("count__wishlist")}>
                {userInfo?.countWishlist > 0 && <span>{userInfo?.countWishlist}</span>}
              </div>}
          </div>
          <div className={cx("header__logo")}>
            <h1>
              <a href={"/"}>3Trees</a>
            </h1>
          </div>
        </div>

        {isUser ? (
          <div className={cx("header__user")}>
            <div className={cx("header__user__img")}>
              <img src={userInfo?.avatar === "null" ? imgs.imgUser : userInfo?.avatar }></img>
            </div>
            <div className={cx("header__user__name")}>{(userInfo.firstName || userInfo.lastName) ? userInfo?.firstName +" "+ userInfo?.lastName : userInfo?.email?.split("@")[0]}</div>

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
              { sessionIsStaff === "true" && <a href={ userInfo.isSuperuser ? '/manager/user' : '/manager/add-film'} className={cx("header__user__modal__item")}>
                <>
                  <i className="fas fa-user-cog"></i>
                  <span className={cx("header__user__modal__item__text")}>
                    Manager
                  </span>
                </>
              </a>}
              <a href={'/wishlist'}  className={cx("header__user__modal__item")}>
                  <i className="fas fa-list"></i>
                  <span className={cx("header__user__modal__item__text")}>
                    wishlist
                    { userInfo?.countWishlist > 0 && <label className={cx("header__user__modal__item__text__count")}>
                      {userInfo?.countWishlist} 
                    </label>}
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
            <div className={cx("header__user__notUser__register")}  onClick={() => showModalRegister()}>
              <button>Register</button>
            </div>
            <div className={cx("header__user__notUser__login")}  onClick={() => showModalLogin()}>
              <button>Login</button>
            </div>
           {isShow && <Modal isLogin = {isLogin} callBack = {callBack} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
