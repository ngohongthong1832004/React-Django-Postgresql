import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import styles from "../homeManager.module.scss";
import SearchItemMini from "./searchItemMini";
import { toast } from "react-toastify";
import useDebounce from "../../debounce";



const cx = classNames.bind(styles);

const SearchMini = ({
    data = [],
    result = () => {},
    cb = () => {},
    isSearchSet
    }) => {

    
    const [isShowModal, setIsShowModal] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const debounce = useDebounce(searchValue, 0)


    const handleChangeSearchValue = (e) => {
        let searchValue = e.target.value
        setSearchValue(searchValue)
        if (searchValue.trim().length > 0) setIsShowModal(true)
        if (searchValue.length === 0) setIsShowModal(false)
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
    const handleClickSearch = (e) => {
        e.preventDefault()
        result(searchValue)
        cb(true)
        setIsShowModal(false)
    }

    const handleClickAll = (e) => {
        e.preventDefault()
        cb(false)
        setIsShowModal(false)
    }
    
    result(debounce)

    return (
        <div className={cx("search__mini","px-10")} onBlur={handleOnBlur}>
            <form action="">
                {/* Use scss from film result */}
                <div className = {cx("search__mini__detail")}>
                    <div className = {cx("search__mini__detail__item","w-100 relative")}>
                        <div className = {cx("wrap__btn__search")}>
                            <button className={cx("btn__search__film",{"active" : !isSearchSet})} style={{width : "4rem"}} onClick={(e) => handleClickAll(e)}>All</button>
                        </div>
                        <input 
                            className={cx("input-text")} 
                            value={searchValue}  
                            onChange={handleChangeSearchValue}
                            onFocus={handleFocus}
                            placeholder="Write name film to delete" 
                            type="text"/>
                        <div className = {cx("wrap__btn__search" )}>
                            <button className={cx("btn__search__film",{"active" : isSearchSet})} onClick={(e) => handleClickSearch(e)}>Search</button>
                        </div>
                       {isShowModal &&  data?.length > 0 && <div className = {cx("modal__search__film", "absolute")}>
                            {
                                data?.map((item, index) => {
                                   if (index < 5) return <SearchItemMini key={index} result={getValueSearch} item={item.name}/>
                                })
                            }
                           
                        </div>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchMini;