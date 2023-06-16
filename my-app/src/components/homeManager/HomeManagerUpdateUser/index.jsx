import classNames from "classnames/bind";
import styles from "../homeManager.module.scss";

const cx = classNames.bind(styles);


const HomeManagerUpdateUser = () => {
    return (
        <div className = {cx("user")}>
            <h1>Home Manager Update Film</h1>

            <div className={cx("search__film__update","px-10")}>
                <form action="">
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item","w-100 relative")}>
                            <input className={cx("input-text")} placeholder="Write name film to update" type="text"/>
                            <div className = {cx("wrap__btn__search")}>
                                <button className={cx("btn__search__film")} type="submit">Search</button>
                            </div>
                            <div className = {cx("modal__search__film", "absolute left")}>
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
            <div className={cx("form__add__film","px-10")}>
                <form action="">
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Image </p>
                            <span>:</span>
                            <input className={cx("input-text")} type="file" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Name </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write name" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Sub Name </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write sub name" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Release </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write film" type="date" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Length </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={90} type="number"  min="1" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>IMDb </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={6.5} type="text"  min="1" max="10" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Star </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={5} type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Desc </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write desc" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Cast </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write cast with Json type" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Countries </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write Countries with Json type" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Productions </p>
                            <span>:</span>
                            <input className={cx("input-text")} placeholder="Write Productions with Json type" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("wrap__btn")}>
                        <button className={cx("btn__add__film")} type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HomeManagerUpdateUser;