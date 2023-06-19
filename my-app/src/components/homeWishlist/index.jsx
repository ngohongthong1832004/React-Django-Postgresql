import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

import styles from "./homeWishlist.module.scss";
import ItemFilm from "../itemFilm";
import Pagination from "../pagination";

const cx = classNames.bind(styles);

const HomeWishlist = () => {

  const [show, setShow] = useState(0); // 0: wishlist, 1: like

  const navigate = useNavigate();
  const isUser = Cookies.get('sessionToken');

  const getPage = (page) => {
    toast.success(page);
  }


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
    <div className={cx("wishlist", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
     { isUser && <>
        <h1>My Wishlist</h1>
      
        <div className={cx("wishlist__wrap__item__filter", "grid gap-5 grid-cols-2 sm:grid-cols-5 ")}>
          <div className={cx(`wishlist__wrap__item__filter__title${show === 0 ? "--active" : ""}`,)} onClick={() => setShow(0)}>
            <p className={cx("wishlist__wrap__item__filter__title__text")}>
              Follow
              <i className={cx("fas fa-music", "pl-2")}></i>
            </p>
          </div>
          <div className={cx(`wishlist__wrap__item__filter__title${show === 1 ? "--active" : ""}`,)} onClick={() => setShow(1)}>
            <p className={cx("wishlist__wrap__item__filter__title__text")}>
              Like
              <i className={cx("fas fa-heart", "pl-2")}></i>
            </p>
          </div>
        </div>
        <div className={cx("wishlist__wrap__item", "grid gap-5 grid-cols-6 sm:grid-cols-10")}>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-start-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
            <ItemFilm className={"col-span-2 sm:col-span-2"}/>
        </div>
        <Pagination result = {getPage}/>
      </>}
    </div>
  );
};

export default HomeWishlist;
