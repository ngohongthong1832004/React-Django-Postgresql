import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


import styles from "../homeManager.module.scss";
import FilmItem from "./filmitem";
import Pagination from "../../pagination";
import SearchMini from "../SearchComponent";


const cx = classNames.bind(styles);


const HomeManagerDeleteUser = () => {
    const navigate = useNavigate();
    const userInfo = Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : {};

    
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


    const getPage = (page) => {
        toast.success(page);
    }

    const getValueSearch = (value) => {
        toast.success(value);
    }



    return (
        <div className={cx("user")}>
            <h1>Home Manager Delete Film</h1>
            <SearchMini  result={getValueSearch} />
            <br/>
            <div className={cx("user__list")}>
                <table className={cx("table-auto border-separate border border-slate-500","tableCustom")}>
                    <thead>
                        <tr>
                            <th className={cx('border border-slate-600')}>ID</th>
                            <th className={cx('border border-slate-600')}>Name</th>
                            <th className={cx('border border-slate-600')}>Year</th>
                            <th className={cx('border border-slate-600')}>Countries</th>
                            <th className={cx('border border-slate-600')}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FilmItem />
                    </tbody>
                </table>
                <Pagination  result = {getPage} />
            </div>
        </div>
    );
}

export default HomeManagerDeleteUser;