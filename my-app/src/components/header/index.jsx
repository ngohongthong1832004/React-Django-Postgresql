import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header", "p-3")}>
      <div className={cx("header__wrap__container", "container mx-auto")}>
        <div className={cx("header__option")}>
          <div className={cx("header__sidebar")}>
            <button>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={cx("header__logo")}>
            <h1>3Trees</h1>
          </div>
        </div>
        
        <div className={cx("header__user")}>
          <div>Bap Hong Pine</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
