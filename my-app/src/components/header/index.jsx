import classNames from "classnames/bind";

import imgs from "../../assets";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className={cx("header", "p-3")}>
      <div className={cx("header__wrap__container", "container mx-auto")}>
        <div className={cx("header__option")}>
          <div className={cx("header__sidebar")}>
            <button>
              <i className="fas fa-bars"></i>
            </button>

            {/* <div className={cx("sidebar__modal")}>
              <div className={cx("sidebar__modal__wrap")}>
                <div className={cx("sidebar__modal__item")}>
                  <i className="fas fa-home"></i>
                  <span className={cx("sidebar__modal__item__text")}>
                    Home
                  </span>
                </div>
                <div className={cx("sidebar__modal__item")}>
                  <i className="fas fa-home"></i>
                  <span className={cx("sidebar__modal__item__text")}>
                    Home
                  </span>
                </div>
                <div className={cx("sidebar__modal__item")}>
                  <i className="fas fa-home"></i>
                  <span className={cx("sidebar__modal__item__text")}>
                    Home
                  </span>
                </div>
                <div className={cx("sidebar__modal__item")}>
                  <i className="fas fa-user"></i>
                  <span className={cx("sidebar__modal__item__text")}>
                    Profile
                  </span>
                </div>
                <div className={cx("sidebar__modal__item")}>
                  <i className="fas fa-cog"></i>
                  <span className={cx("sidebar__modal__item__text")}>
                    Setting
                  </span>
                </div>
                <div className={cx("sidebar__modal__item")}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span className={cx("sidebar__modal__item__text")}>
                    Logout
                  </span>
                </div>
              </div>
            </div> */}
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
                <i className="fas fa-cog"></i>
                <span className={cx("header__user__modal__item__text")}>
                  Setting
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
              <button>Register</button>
            </div>
            <div className={cx("header__user__notUser__login")}>
              <button>Login</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
