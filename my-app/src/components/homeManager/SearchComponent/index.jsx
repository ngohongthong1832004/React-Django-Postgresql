import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "../homeManager.module.scss";
import SearchItemMini from "./searchItemMini";
import { toast } from "react-toastify";



const cx = classNames.bind(styles);

const SearchMini = ({
    data = [],
    result = () => {},
    }) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const handleChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
        if (e.target.value.trim().length > 0) setIsShowModal(true)
        if (e.target.value.length === 0) setIsShowModal(false)
    }

    const handleOnBlur = () => {
       setTimeout(() => {
        setIsShowModal(false)
       }, 200);
    }
    const handleFocus = () => {
        if (searchValue.trim().length > 0) setIsShowModal(true)
    }

    const getValueSearch = (value) => {
        result(value)
        setSearchValue(value)
        setIsShowModal(false)
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
                            <SearchItemMini result={getValueSearch}/>
                            <SearchItemMini result={getValueSearch}/>
                            <SearchItemMini result={getValueSearch}/>
                            <SearchItemMini result={getValueSearch}/>
                            <SearchItemMini result={getValueSearch}/>
                        </div>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchMini;