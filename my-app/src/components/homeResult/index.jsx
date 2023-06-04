
import classNames from "classnames/bind"

import styles from "./homeResult.module.scss"


const cx = classNames.bind(styles)


const HomeResult = () => {
    return (
        <div className={cx("homeResult","container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <div className={cx("homeResult__wrap")}>
                <div className = {cx("homeResult__wrap__img")}>
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                    <div className = {cx("homeResult__wrap__img__desc")}>
                        <p className = {cx("homeResult__wrap__img__desc__text")}>2027</p>
                        <p className = {cx("homeResult__wrap__img__desc__horizon")}>|</p>
                        <p className = {cx("homeResult__wrap__img__desc__text")}>
                            <span className = {cx("homeResult__wrap__img__desc__text__span")}>5.5</span>
                            <label className = {cx("homeResult__wrap__img__desc__text__label")}>
                                <i className = {cx("fas fa-star")}></i>
                            </label>
                        </p>
                    </div>
                    <div className = {cx("homeResult__wrap__img__btn")}>
                        <button className = {cx("homeResult__wrap__img__btn__item")}>
                            <p className = {cx("homeResult__wrap__img__btn__item__text")}>Like</p>
                            <i className = {cx("fas fa-heart")}></i>
                        </button>
                        <button className = {cx("homeResult__wrap__img__btn__item")}>
                            <p className = {cx("homeResult__wrap__img__btn__item__text")}>Follow</p>
                            <i className = {cx("fas fa-plus")}></i>
                        </button>
                    </div>
                </div>
                <div className = {cx("homeResult__wrap__info")}>
                    <div className = {cx("homeResult__wrap__info__title")}>
                        <h1 className = {cx("homeResult__wrap__info__title__text")}>Transformers: The Last Knight</h1>
                    </div>
                    <div className = {cx("homeResult__wrap__info__subTitle")}>
                        <h2 className = {cx("homeResult__wrap__info__subTitle__text")}>Hiệp si cuối cùng</h2>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Genre </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Action, Adventure, Science Fiction</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Release </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>2017-06-21</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Length </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>90 min</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Cast </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Michael Bay, Mark Wahlberg, Isabela Merced, Jerrod Carmichael, Santiago Cabrera</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>countries </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Michael Bay, Mark Wahlberg, Isabela Merced, Jerrod Carmichael</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Production </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Quisquam, Michael Bay, Mark Wahlberg, Isabela Merced, voluptatum.</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Desc </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Mark Wahlberg, , Isabela Merced, Jerrod Carmichael, Santiago Cabrera, John Turturro, Liam Garrigan, Mitch Pileggi, Glenn Morshower, Gemma Chan, John Goodman, Peter Cullen, Frank Welker, Ken Watanabe, Jim Carter, Omar Sy, Reno Wilson, John DiMaggio, Tom Kenny, Steve Buscemi, Jess Harnell, Andy Bean, Walles Hamonde, Erik Aadahl, Jim Carter, Tom Kenny, Steve Buscemi, Jess Harnell, Andy Bean, Walles Hamonde, Erik Aadahl</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("homeResult__more")}>
                <div className={cx("homeResult__more__cast")}>
                    <div className={cx("homeResult__more__cast__title")}>
                        <h1 className={cx("homeResult__more__cast__title__text")}>Cast</h1>
                    </div>
                    <div className={cx("homeResult__more__cast__wrap")}>
                        <div className={cx("homeResult__more__cast__wrap__item")}>
                            <div className={cx("homeResult__more__cast__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__more__cast__wrap__item__info")}>
                                <p className={cx("homeResult__more__cast__wrap__item__info__text")}>Mark Wahlberg</p>
                                <p className={cx("homeResult__more__cast__wrap__item__info__text")}>Cade Yeager</p>
                            </div>
                        </div>
                        <div className={cx("homeResult__more__cast__wrap__item")}>
                            <div className={cx("homeResult__more__cast__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__more__cast__wrap__item__info")}>
                                <p className={cx("homeResult__more__cast__wrap__item__info__text")}>Mark Wahlberg</p>
                                <p className={cx("homeResult__more__cast__wrap__item__info__text")}>Cade Yeager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("homeResult__more__recommend")}>
                    <div className={cx("homeResult__more__recommend__title")}>
                        <h1 className={cx("homeResult__more__recommend__title__text")}>Recommend</h1>
                    </div>
                    <div className={cx("homeResult__more__recommend__wrap")}>
                        <div className={cx("homeResult__more__recommend__wrap__item")}>
                            <div className={cx("homeResult__more__recommend__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__more__recommend__wrap__item__info")}>
                                <p className={cx("homeResult__more__recommend__wrap__item__info__text")}>Mark Wahlberg</p>
                                <p className={cx("homeResult__more__recommend__wrap__item__info__text")}>2012</p>
                            </div>
                        </div>
                        <div className={cx("homeResult__more__recommend__wrap__item")}>
                            <div className={cx("homeResult__more__recommend__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__more__recommend__wrap__item__info")}>
                                <p className={cx("homeResult__more__recommend__wrap__item__info__text")}>Mark Wahlberg</p>
                                <p className={cx("homeResult__more__recommend__wrap__item__info__text")}>2012</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={cx("homeResult__chat")}>
                <div className={cx("homeResult__chat__title")}>
                    <h1 className={cx("homeResult__chat__title__text")}>Chat</h1>
                </div>
                <div className={cx("homeResult__chat__wrap")}>
                    {/* imput */}
                    <div className={cx("homeResult__chat__wrap__input")}>
                        <input type="text" placeholder="Type your message here..." />
                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                            <i className={cx("fas fa-paper-plane")}></i>
                        </button>
                    </div>
                    {/* chat */}
                    <div className={cx("homeResult__chat__wrap__chat")}>
                        <div className={cx("homeResult__chat__wrap__item")}>
                            <div className={cx("homeResult__chat__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__chat__wrap__item__info")}>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Mark Wahlberg</p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeResult