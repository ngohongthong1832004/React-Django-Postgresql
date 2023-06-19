import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify';

import styles from "./homeSearch.module.scss";
import ItemFilm from "../itemFilm";
import Pagination from "../pagination";

const cx = classnames.bind(styles);

const HomeSearch = () => {
  const [show, setShow] = useState(0);
  
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  var searchValue = params.get('q'); 

  const getPage = (page) => {
    toast.success(page);
  }




  return (
    <div
      className={cx("homeSearch", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}
    >
      <div className={cx("homeSearch__header", "p-1.5")}>
        <div className={cx("homeSearch__header__title")}>
          The result for : <span>{searchValue ? searchValue : "Please enter search value"}</span>{" "}
        </div>
        <div className={cx("homeSearch__header__countItem")}>
          <span>10</span> films
        </div>
      </div>
      <div className={cx("homeSearch__filter__wrap", "p-1.5")}>
        <div
          className={cx(
            "homeSearch__filter__wrap__item",
            "grid grid-cols-5 gap-5",
          )}
        >
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 0 ? "--active" : ""}`,)} onClick={() => setShow(0)}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Name
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 1 ? "--active" : ""}`,)} onClick={() => setShow(1)}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Genre
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 2 ? "--active" : ""}`,)} onClick={() => setShow(2)}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Cast
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 3 ? "--active" : ""}`,)} onClick={() => setShow(3)}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Director
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 4 ? "--active" : ""}`,)} onClick={() => setShow(4)}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Your think
            </p>
          </div>
        </div>
      </div>
      <div className={cx("homeSearch__content", "p-1.5")}>
        <div className={cx("homeSearch__content__wrap__item","grid gap-5 grid-cols-3 sm:grid-cols-10",)}>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-start-2 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
          <ItemFilm className={"col-span-1 sm:col-span-2"}/>
        </div>
      </div>
      <Pagination result = {getPage}/>
    </div>
  );
};

export default HomeSearch;
