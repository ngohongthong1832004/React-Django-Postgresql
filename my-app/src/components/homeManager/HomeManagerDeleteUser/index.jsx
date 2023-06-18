import classNames from "classnames/bind";
import styles from "../homeManager.module.scss";
import FilmItem from "./filmitem";
import Pagination from "../../pagination";
import SearchMini from "../SearchComponent";

const cx = classNames.bind(styles);


const HomeManagerDeleteUser = () => {
    return (
        <div className={cx("user")}>
            <h1>Home Manager Delete Film</h1>
            <SearchMini />
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
                <Pagination />
            </div>
        </div>
    );
}

export default HomeManagerDeleteUser;