import classNames from "classnames/bind";
import styles from "../homeManager.module.scss";

const cx = classNames.bind(styles);


const HomeManagerUser = () => {
    return (
        <div className={cx("user")}>
            <h1>Home Manager User</h1>
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
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-times","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>admin</td>
                            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <i className={cx("fas fa-check","text-green-500")}></i>
                            </td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={cx("homeSearch__footer__pagination", "p-1.5")}>
                    <div className={cx("homeSearch__footer__pagination__wrap")}>
                    <div className={cx("homeSearch__footer__pagination__wrap__item")}>
                        <div
                        className={cx("homeSearch__footer__pagination__wrap__item__text")}
                        >
                        <i className={cx("fas fa-chevron-left")}></i>
                        </div>
                    </div>
                    <div className={cx("homeSearch__footer__pagination__wrap__item")}>
                        <div
                        className={cx("homeSearch__footer__pagination__wrap__item__text")}
                        >
                        1
                        </div>
                    </div>
                    <div className={cx("homeSearch__footer__pagination__wrap__item")}>
                        <div
                        className={cx("homeSearch__footer__pagination__wrap__item__text")}
                        >
                        1
                        </div>
                    </div>
                    <div className={cx("homeSearch__footer__pagination__wrap__item")}>
                        <div
                        className={cx("homeSearch__footer__pagination__wrap__item__text")}
                        >
                        ..
                        </div>
                    </div>
                    <div className={cx("homeSearch__footer__pagination__wrap__item")}>
                        <div
                        className={cx("homeSearch__footer__pagination__wrap__item__text")}
                        >
                        100
                        </div>
                    </div>
                    <div className={cx("homeSearch__footer__pagination__wrap__item")}>
                        <div
                        className={cx("homeSearch__footer__pagination__wrap__item__text")}
                        >
                        <i className={cx("fas fa-chevron-right")}></i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeManagerUser;