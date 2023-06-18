import classNames from "classnames/bind";
import { useState, useEffect } from "react";


import styles from "./itemFilm.module.scss";

const cx = classNames.bind(styles);

const ItemFilm = ({className, data= []}) => {
    const classes = cx("item", className);


    return (
        <div className={classes}>
            <div className={cx("item__img")}>
                <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
            </div>
            <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                <p className={cx("item__title__text__sub")}>
                    2019
                    <span>
                        100
                        <i className={cx("fas fa-heart", "pl-1")}></i>
                    </span>
                </p>
            </ div>
        </div>
    )
}

export default ItemFilm;