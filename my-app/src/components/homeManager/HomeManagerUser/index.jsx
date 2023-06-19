import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import {toast } from 'react-toastify';

import styles from "../homeManager.module.scss";
import UserItem from "./userItem";
import Pagination from "../../pagination";
import SearchMini from "../SearchComponent";

const cx = classNames.bind(styles);


const HomeManagerUser = () => {

    const getPage = (page) => {
        toast.success(page);
    }
    
    const getValueSearch = (value) => {
        toast.success(value);
    }

    return (
        <div className={cx("user")}>
            <h1>Home Manager User</h1>
            <SearchMini  result={getValueSearch}/>
            <br/>
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
                        <UserItem/>
                        <UserItem/>
                        <UserItem/>
                    </tbody>
                </table>
                <Pagination result = {getPage}/>
            </div>
        </div>
    );
}

export default HomeManagerUser;