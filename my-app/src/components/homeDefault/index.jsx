import classNames from "classnames/bind";
import {useEffect, useState} from "react";
import axios from 'axios';


import styles from "./homeDefault.module.scss";

const cx = classNames.bind(styles);

const HomeDefault = () => {

  return (
    <div
      className={cx(
        "homeDefault__wrap",
        "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2",
      )}
    >
    
      <div className={cx("homeDefault__wrap__content")}>
        <div className={cx("homeDefault__wrap__content__title")}>
          <h1 className={cx("homeDefault__wrap__content__title__text")}>
            Welcome to my website
          </h1>
        </div>
        <div className={cx("homeDefault__wrap__content__title")}>
          <h1 className={cx("homeDefault__wrap__content__title__text")}>
            I hope this web can useful
          </h1>
        </div>
        <div className={cx("homeDefault__wrap__content__title")}>
          <h1 className={cx("homeDefault__wrap__content__title__text")}>
            Search movies with all your imagination
          </h1>
        </div>
      </div>
      <div className={cx("homeDefault__wrap__footer")}>
        <div className={cx("homeDefault__wrap__footer__content")}>
          <div
            className={cx(
              "homeDefault__wrap__footer__content__contact__content",
              "grid gap-5 grid-cols-3 sm:grid-cols-2 md:grid-cols-6 "
            )}
          >
            <div className={cx("homeDefault__wrap__footer__content__contact__content__item",)}>
              <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text",)}>
                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title",)}>
                  <label
                    className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon",)}>
                    <i className={cx("fas fa-map-marker-alt")}></i>
                  </label>
                  Address
                </p>
              </div>
            </div>
            <div className={cx("homeDefault__wrap__footer__content__contact__content__item",)}>
              <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text",)}>
                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title",)}>
                  <label
                    className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon",)}>
                    <i className={cx("fa-brands fa-facebook-f")} />
                  </label>
                  Facebook
                </p>
              </div>
            </div>
            <div className={cx("homeDefault__wrap__footer__content__contact__content__item",)}>
              <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text",)}>
                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title",)}>
                  <label
                    className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon",)}>
                    <i className={cx("fa-brands fa-github")} />
                  </label>
                  Githup
                </p>
              </div>
            </div>

            <div className={cx("homeDefault__wrap__footer__content__contact__content__item",)}>
              <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text",)}>
                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title",)}>
                  <label
                    className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon",)}>
                    <i className={cx("fas fa-phone-alt")}></i>
                  </label>
                  Phone
                </p>
              </div>
            </div>
            <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
              <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text",)}>
                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title",)}>
                  <label
                    className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon",)}>
                    <i className={cx("fas fa-envelope")}></i>
                  </label>
                  Email
                </p>
              </div>
            </div>
            <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
              <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text",)}>
                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title",)}>
                  <label
                    className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon",)}>
                    <i className={cx("fas fa-link")}></i>
                  </label>
                  Linked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDefault;
