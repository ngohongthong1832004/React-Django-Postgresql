import classNames from "classnames/bind";
import { useState, useEffect } from "react";


import styles from "./itemFilm.module.scss";

const cx = classNames.bind(styles);

const ItemFilm = ({className, data= {}}) => {
    const classes = cx("item", className);

    const handleClickItem = () => {
        window.location.href = `/name?q=${data.name}`;
    }

    return (
        <div className={classes} onClick={handleClickItem}>
            <div className={cx("item__img")}>
                <img src={data.img}></img>
            </div>
            <div className={cx("item__title")}>
                <h2 className={cx("item__title__text")}>{data.name}</h2>
                <p className={cx("item__title__text__sub")}>
                    {data.year}
                    <span>
                        {data.like}
                        <i className={cx("fas fa-heart", "pl-1")}></i>
                    </span>
                </p>
            </ div>
        </div>
    )
}

export default ItemFilm;