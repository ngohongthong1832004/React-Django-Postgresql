import classNames from "classnames/bind";
import styles from "../homeManager.module.scss";

const cx = classNames.bind(styles);


const HomeManagerDeleteUser = () => {
    return (
        <div className={cx("user")}>
            <h1>Home Manager Delete Film</h1>
            <div className={cx("search__film__update","px-10")}>
                <form action="">
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item","w-100 relative")}>
                            <input className={cx("input-text")} placeholder="Write name film to delete" type="text"/>
                            <div className = {cx("wrap__btn__search")}>
                                <button className={cx("btn__search__film")} type="submit">Search</button>
                            </div>
                            <div className = {cx("modal__search__film", "absolute left hidden")}>
                                <div className = {cx("modal__search__film__item")}>
                                    <div className = {cx("modal__search__film__item__title")}>
                                        <p className = {cx("modal__search__film__item__title__text")}>Name 1 </p>
                                    </div>
                                </div>
                                <div className = {cx("modal__search__film__item")}>
                                    <div className = {cx("modal__search__film__item__title")}>
                                        <p className = {cx("modal__search__film__item__title__text")}>Name 2</p>
                                    </div>
                                </div>
                                <div className = {cx("modal__search__film__item")}>
                                    <div className = {cx("modal__search__film__item__title")}>
                                        <p className = {cx("modal__search__film__item__title__text")}>Name 3</p>
                                    </div>
                                </div>
                                <div className = {cx("modal__search__film__item")}>
                                    <div className = {cx("modal__search__film__item__title")}>
                                        <p className = {cx("modal__search__film__item__title__text")}>Name 4</p>
                                    </div>
                                </div>
                                <div className = {cx("modal__search__film__item")}>
                                    <div className = {cx("modal__search__film__item__title")}>
                                        <p className = {cx("modal__search__film__item__title__text")}>Name 4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
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
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>Ustralia</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
                            <td className={cx('border border-slate-700','customRow')}>
                                <div className={cx("wrap-btn")}>
                                    <button className={cx("btn","btn__edit")}>Edit</button>
                                    <button className={cx("btn","btn__delete")}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('border border-slate-700','customRow')}>1</td>
                            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
                            <td className={cx('border border-slate-700','customRow')}>2018</td>
                            <td className={cx('border border-slate-700','customRow')}>American</td>
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

export default HomeManagerDeleteUser;