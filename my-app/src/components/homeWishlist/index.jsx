import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

import styles from "./homeWishlist.module.scss";

const cx = classNames.bind(styles);

const HomeWishlist = () => {

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
    <div className={cx("wishlist", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
     { isUser && <>
        <h1>My Wishlist</h1>
      
        <div className={cx("wishlist__wrap__item__filter", "grid grid-cols-5 gap-5")}>
          <div className={cx("wishlist__wrap__item__filter__title")}>
            <p className={cx("wishlist__wrap__item__filter__title__text")}>
              Wishlist
              <i className={cx("fas fa-music", "pl-2")}></i>
            </p>
          </div>
          <div className={cx("wishlist__wrap__item__filter__title")}>
            <p className={cx("wishlist__wrap__item__filter__title__text")}>
              Like
              <i className={cx("fas fa-heart", "pl-2")}></i>
            </p>
          </div>
        </div>
        <div className={cx("wishlist__wrap__item", "grid grid-cols-5 gap-5")}>
          <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
            <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
          <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
            <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
          <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
            <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
          <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
            <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
          <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
            <div className={cx("item")}>
              <div className={cx("item__img")}>
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
              </div>
              <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text")}>2019</p>
              </ div>
            </div>
        </div>
        <div className={cx("wishlist__footer__pagination", "p-1.5")}>
          <div className={cx("wishlist__footer__pagination__wrap")}>
            <div className={cx("wishlist__footer__pagination__wrap__item")}>
              <div
                className={cx("wishlist__footer__pagination__wrap__item__text")}
              >
                <i className={cx("fas fa-chevron-left")}></i>
              </div>
            </div>
            <div className={cx("wishlist__footer__pagination__wrap__item")}>
              <div
                className={cx("wishlist__footer__pagination__wrap__item__text")}
              >
                1
              </div>
            </div>
            <div className={cx("wishlist__footer__pagination__wrap__item")}>
              <div
                className={cx("wishlist__footer__pagination__wrap__item__text")}
              >
                1
              </div>
            </div>
            <div className={cx("wishlist__footer__pagination__wrap__item")}>
              <div
                className={cx("wishlist__footer__pagination__wrap__item__text")}
              >
                ..
              </div>
            </div>
            <div className={cx("wishlist__footer__pagination__wrap__item")}>
              <div
                className={cx("wishlist__footer__pagination__wrap__item__text")}
              >
                100
              </div>
            </div>
            <div className={cx("wishlist__footer__pagination__wrap__item")}>
              <div
                className={cx("wishlist__footer__pagination__wrap__item__text")}
              >
                <i className={cx("fas fa-chevron-right")}></i>
              </div>
            </div>
          </div>
        </div>
        
      </>}
    </div>
  );
};

export default HomeWishlist;
