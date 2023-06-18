import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "../homeManager.module.scss";
import SearchItemMini from "./searchItemMini";



const cx = classNames.bind(styles);

const SearchMini = ({data = []}) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const handleChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
        setIsShowModal(true)
        if (e.target.value.length === 0) setIsShowModal(false)
    }

    const handleOnBlur = () => {
        setIsShowModal(false)
    }
    const handleFocus = () => {
        if (searchValue.length > 0) setIsShowModal(true)
    }

    return (
        <div className={cx("search__mini","px-10")} onBlur={handleOnBlur}>
            <form action="">
                {/* Use scss from film result */}
                <div className = {cx("search__mini__detail")}>
                    <div className = {cx("search__mini__detail__item","w-100 relative")}>
                        <input 
                            className={cx("input-text")} 
                            value={searchValue}  
                            onChange={handleChangeSearchValue}
                            onFocus={handleFocus}
                            placeholder="Write name film to delete" 
                            type="text"/>
                        <div className = {cx("wrap__btn__search")}>
                            <button className={cx("btn__search__film")} type="submit">Search</button>
                        </div>
                       {isShowModal && <div className = {cx("modal__search__film", "absolute left")}>
                            <SearchItemMini />
                            <SearchItemMini />
                            <SearchItemMini />
                            <SearchItemMini />
                            <SearchItemMini />
                        </div>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchMini;