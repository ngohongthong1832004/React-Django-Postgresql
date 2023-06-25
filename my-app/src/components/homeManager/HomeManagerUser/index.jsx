import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import {toast } from 'react-toastify';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import styles from "../homeManager.module.scss";
import UserItem from "./userItem";
import Pagination from "../../pagination";
import SearchMini from "../SearchComponent";

const cx = classNames.bind(styles);


const HomeManagerUser = () => {
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
        axios.get(`${import.meta.env.VITE_URL_BACKEND}get-all-user?page=${page}`,option)
        .then(res => {
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

        axios.post(`${import.meta.env.VITE_URL_BACKEND}search-user/?page=${page}`,formData ,{headers})
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

        axios.post(`${import.meta.env.VITE_URL_BACKEND}search-user/?page=${pageSearch}`,formData ,{headers})
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

    const searchDataWithName = searchData?.data?.map((item) => {
        return {...item, name : item.first_name + " " + item.last_name}
    })

    // console.log("searchDataWithName : ",searchDataWithName)
    
    // console.log("searchData : ",searchData)
    // console.log("isSearchSet : ",isSearchSet)
    return (
        <div className={cx("user")}>
            <h1>Home Manager User</h1>
            <SearchMini getIsSearchSet= {setGetIsSearchSet} isSearchSet = {isSearchSet} data={searchDataWithName} result={getValueSearch} cb = {handleClickBtnAndMiniItem}/>
            <br/>
            { !isSearchSet ? <div className={cx("user__list")}>
                <table className={cx("table-auto border-separate border border-slate-500","tableCustom")}>
                    <thead>
                        <tr>
                            <th className={cx('border border-slate-600')}>ID</th>
                            <th className={cx('border border-slate-600')}>Name</th>
                            <th className={cx('border border-slate-600')}>Email</th>
                            <th className={cx('border border-slate-600')}>Staff</th>
                            <th className={cx('border border-slate-600')}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            data?.data?.map((user, index) => {
                                return <UserItem key={index} data={user}/>
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
                            <th className={cx('border border-slate-600')}>Email</th>
                            <th className={cx('border border-slate-600')}>Staff</th>
                            <th className={cx('border border-slate-600')}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            searchData?.data?.length > 0 ? searchData?.data?.map((user, index) => {
                                return <UserItem key={index} data={user}/>
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

export default HomeManagerUser;