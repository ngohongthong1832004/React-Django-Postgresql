import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "../homeManager.module.scss";


const cx = classNames.bind(styles);

const SearchItemMini = ({data = []}) => {
    return (
        <div className = {cx("modal__search__film__item")}>
            <div className = {cx("modal__search__film__item__title")}>
                <p className = {cx("modal__search__film__item__title__text")}>Name 1 </p>
            </div>
        </div>
    )
}
export default SearchItemMini;