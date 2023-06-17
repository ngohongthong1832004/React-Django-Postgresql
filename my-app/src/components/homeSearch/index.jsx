import classnames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./homeSearch.module.scss";

const cx = classnames.bind(styles);

const HomeSearch = () => {
  const [show, setShow] = useState(0);


  return (
    <div
      className={cx("homeSearch", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}
    >
      <div className={cx("homeSearch__header", "p-1.5")}>
        <div className={cx("homeSearch__header__title")}>
          The result for : <span>transformer 6</span>{" "}
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
        <div className={cx("homeSearch__content__wrap__item","grid gap-5 grid-cols-3 sm:grid-cols-5",)}>
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
              <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
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
      </div>
      <div className={cx("homeSearch__footer__pagination", "p-1.5")}>
        <div className={cx("homeSearch__footer__pagination__wrap")}>
          <div className={cx("homeSearch__footer__pagination__wrap__item")}>
            <div
              className={cx("homeSearch__footer__pagination__wrap__item__text")}
            >
              <i className={cx("fas fa-chevron-left")}></i>
            </div>
          </div>
          <div className={cx("homeSearch__footer__pagination__wrap__item")}>
            <div
              className={cx("homeSearch__footer__pagination__wrap__item__text")}
            >
              1
            </div>
          </div>
          <div className={cx("homeSearch__footer__pagination__wrap__item")}>
            <div
              className={cx("homeSearch__footer__pagination__wrap__item__text")}
            >
              2
            </div>
          </div>
          <div className={cx("homeSearch__footer__pagination__wrap__item")}>
            <div
              className={cx("homeSearch__footer__pagination__wrap__item__text")}
            >
              ..
            </div>
          </div>
          <div className={cx("homeSearch__footer__pagination__wrap__item")}>
            <div
              className={cx("homeSearch__footer__pagination__wrap__item__text")}
            >
              100
            </div>
          </div>
          <div className={cx("homeSearch__footer__pagination__wrap__item")}>
            <div
              className={cx("homeSearch__footer__pagination__wrap__item__text")}
            >
              <i className={cx("fas fa-chevron-right")}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
