import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import styles from "./homeManager.module.scss";
import { Outlet, Link, NavLink } from "react-router-dom";
import Cookies from 'js-cookie';
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const cx = classNames.bind(styles);

const HomeManager = () => {
  const navigate = useNavigate();
  const isUser = Cookies.get('sessionIsStaff');

  useEffect(() => {
    const loader = async () => {
      if (isUser === 'false' || !isUser) {
        return navigate("/");
      }
      return null;
    };
    loader();
  }, []);  

  return (
    <div className={cx("manager", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
      { isUser === 'true' && <>
        <h1>Admin Site</h1>
        <div className={cx("homeSearch__filter__wrap", "p-1.5")}>
          <div className={cx("homeSearch__filter__wrap__item",  "grid grid-cols-5 gap-5",)}>
            <style>
            {`
              .active {
                background-color: var(--gray-2) !important;
              }
            `}
          </style>
            <NavLink to={"user"}   className={cx("homeSearch__filter__wrap__item__title")}>
                <p className={cx("homeSearch__filter__wrap__item__title__text")}>
                  User
                </p>
            </NavLink>
            <NavLink to={"add-user"} className={cx(`homeSearch__filter__wrap__item__title`)}>
              <p className={cx("homeSearch__filter__wrap__item__title__text")}>
                Add Film
              </p>
            </NavLink>
            <NavLink to={"update-user"} className={cx(`homeSearch__filter__wrap__item__title`)}>
              <p className={cx("homeSearch__filter__wrap__item__title__text")}>
                Update Film
              </p>
            </NavLink>
            <NavLink to={"delete-user"} className={cx(`homeSearch__filter__wrap__item__title`)}>
              <p className={cx("homeSearch__filter__wrap__item__title__text")}>
                Delete Film
              </p>
            </NavLink>
          </div>
        </div>
        <div className={cx("manager__content", "pb-8")}>
          <Outlet />
        </div>
      </>}
    </div>
  );
};

export default HomeManager;
