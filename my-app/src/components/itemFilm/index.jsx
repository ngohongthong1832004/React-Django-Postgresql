import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import imgs from "../../assets";


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
            <img
                src={data.img}
                onError={(e) => {
                    e.target.src = imgs.noImage; // Replace with the path to your fallback image
                    e.target.onerror = null; // Prevent infinite fallback loop if fallback image also fails
                }}
                alt="Fallback Image"
            />
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