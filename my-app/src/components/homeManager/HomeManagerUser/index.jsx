import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "../homeManager.module.scss";
import UserItem from "./userItem";
import Pagination from "../../pagination";
import SearchMini from "../SearchComponent";

const cx = classNames.bind(styles);


const HomeManagerUser = () => {

    
    


    return (
        <div className={cx("user")}>
            <h1>Home Manager User</h1>
            <SearchMini />
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
                <Pagination />
            </div>
        </div>
    );
}

export default HomeManagerUser;