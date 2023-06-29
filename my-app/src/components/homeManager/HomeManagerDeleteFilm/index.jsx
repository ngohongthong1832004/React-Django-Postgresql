import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


import styles from "../homeManager.module.scss";
import FilmItem from "./filmitem";
import Pagination from "../../pagination";
import SearchMini from "../SearchComponent";


const cx = classNames.bind(styles);


const HomeManagerDeleteUser = () => {
    const navigate = useNavigate();

    const userInfo = Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : {};
    const [page, setPage] = useState(1);
    const [pageSearch, setPageSearch] = useState(1);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [isSearchSet, setIsSearchSet] = useState(false)

    useEffect(() => {
        const loader = async () => {
          if (!userInfo.isSuperuser) {
            toast.error('You are not authorized to access this page');
            return navigate("/");
          }
          return null;
        };
        loader();
    }, []);  


    useEffect(() => {
        const option = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            }
        }
        axios.get(`${import.meta.env.VITE_URL_BACKEND}get-all-movie/?page=${page}`,option)
        .then(res => {
            // console.log("???", res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[page])

    const getPage = (page) => {
        setPage(page)
    }

    const getPageSearch = (page) => {
        setPageSearch(page)
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": `Token ${Cookies.get('sessionToken')}`
        };

        // console.log("===================== value : %s ====================", value)

        const formData = new FormData();
        formData.append('searchValue', searchValue.trim());

        axios.post(`${import.meta.env.VITE_URL_BACKEND}search-movie/?page=${page}`,formData ,{headers})
        .then(res => {
            // if (searchData?.length == res.data?.length) return []
            return res.data
        })
        .then(res => {
            // console.log("res : ",res)
            setSearchData(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getValueSearch = (value, pageSearch = 1) => {
        // check debounce
        // if (value === "") return
        if (searchValue === value) return
        setSearchValue(value)
        // end check debounce
        // console.log("searchValue : ",searchValue)
        // console.log("value : ",value)

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": `Token ${Cookies.get('sessionToken')}`
        };

        // console.log("===================== value : %s ====================", value)

        const formData = new FormData();
        formData.append('searchValue', value.trim());

        axios.post(`${import.meta.env.VITE_URL_BACKEND}search-movie/?page=${pageSearch}`,formData ,{headers})
        .then(res => {
            // if (searchData?.length == res.data?.length) return []
            return res.data
        })
        .then(res => {
            // console.log("res : ",res)
            setSearchData(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleClickBtnAndMiniItem = (value) => {
        setIsSearchSet(value)
    }

    const setGetIsSearchSet = (value) => {
        setIsSearchSet(value)
    }


    return (
        <div className={cx("user")}>
            <h1>Home Manager Delete Film</h1>
            <SearchMini getIsSearchSet= {setGetIsSearchSet} isSearchSet = {isSearchSet} data={searchData.data} result={getValueSearch} cb = {handleClickBtnAndMiniItem}/>
            <br/>
            { !isSearchSet ? <div className={cx("user__list")}>
                <table className={cx("table-auto border-separate border border-slate-500","tableCustom")}>
                    <thead>
                        <tr>
                            <th className={cx('border border-slate-600')}>ID</th>
                            <th className={cx('border border-slate-600')}>Name</th>
                            <th className={cx('border border-slate-600')}>Year</th>
                            <th className={cx('border border-slate-600')}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            data?.data?.map((film, index) => {
                                return <FilmItem key={index} data={film}/>
                            }) 
                        }
                    </tbody>
                </table>
                <Pagination data = {data?.pagination}  result = {getPage}/>
            </div> : 
                <div className={cx("user__list")}>
                <table className={cx("table-auto border-separate border border-slate-500","tableCustom")}>
                    <thead>
                        <tr>
                            <th className={cx('border border-slate-600')}>ID</th>
                            <th className={cx('border border-slate-600')}>Name</th>
                            <th className={cx('border border-slate-600')}>Year</th>
                            <th className={cx('border border-slate-600')}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            searchData?.data?.length > 0 ? searchData?.data?.map((user, index) => {
                                return <FilmItem key={index} data={user}/>
                            }) : <tr><td colSpan="5" className={cx("text-center")}>No result</td></tr>
                        }
                    </tbody>
                </table>
                <Pagination data = {searchData?.pagination}  result = {getPageSearch}/>
            </div>
            }
        </div>
    );
}

export default HomeManagerDeleteUser;