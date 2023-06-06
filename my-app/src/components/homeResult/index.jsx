import classNames from "classnames/bind"
import { useState } from "react"


import styles from "./homeResult.module.scss"


const cx = classNames.bind(styles)




const HomeResult = () => {
    const [moreCast, setMoreCast] = useState(true)
    const [moreChat, setMoreChat] = useState(true)


    return (
        <div className={cx("homeResult","container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <div className={cx("homeResult__wrap")}>
                <div className = {cx("homeResult__wrap__img")}>
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                    <div className = {cx("homeResult__wrap__img__desc")}>
                        <p className = {cx("homeResult__wrap__img__desc__text")}>
                            <span className = {cx("homeResult__wrap__img__desc__text__span")}>5.5</span>
                            <label className = {cx("homeResult__wrap__img__desc__text__label")}>
                                <i className = {cx("fas fa-star")}></i>
                            </label>
                        </p>
                        <p className = {cx("homeResult__wrap__img__desc__horizon")}>|</p>
                        <p className = {cx("homeResult__wrap__img__desc__text")}>
                        <span className = {cx("homeResult__wrap__img__desc__text__span")}>8.6</span>
                            <label className = {cx("homeResult__wrap__img__desc__text__label")}>
                                IMDb
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
                        <h2 className={cx("homeResult__more__cast__title__text")}>Cast</h2>
                    </div>
                    <div className={cx("homeResult__more__cast__wrap", "grid grid-cols-5 gap-5")}>
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
                    <div className={cx("homeResult__more__cast__pagination")}>
                        <button className={cx("homeResult__more__cast__pagination__item")} onClick={ () => setMoreCast(!moreCast)}>
                            {
                                moreCast ? <i className={cx("fas fa-chevron-down")}></i>
                                :<i className={cx("fas fa-chevron-up")}></i>
                            }
                        </button>
                    </div>
                </div>
                <div className={cx("homeResult__more__recommend")}>
                    <div className={cx("homeResult__more__recommend__title")}>
                        <h2 className={cx("homeResult__more__recommend__title__text")}>Recommend</h2>
                    </div>
                    <div className={cx("homeResult__more__recommend__wrap", "grid grid-cols-5 gap-5")}>
                        <div className={cx("item")}>
                            <div className={cx("item__img")}>
                            <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
                            </div>
                            <div className={cx("item__title")}>
                            <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                            <p className={cx("item__title__text")}>2019</p>
                            </ div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("item__img")}>
                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
                            </div>
                            <div className={cx("item__title")}>
                            <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                            <p className={cx("item__title__text")}>2019</p>
                            </ div>
                        </div>
                                        <div className={cx("item")}>
                            <div className={cx("item__img")}>
                            <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
                            </div>
                            <div className={cx("item__title")}>
                            <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                            <p className={cx("item__title__text")}>2019</p>
                            </ div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("item__img")}>
                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"></img>
                            </div>
                            <div className={cx("item__title")}>
                            <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                            <p className={cx("item__title__text")}>2019</p>
                            </ div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("item__img")}>
                            <img src="https://i.ytimg.com/vi/6Vtf0MszgP8/maxresdefault.jpg"></img>
                            </div>
                            <div className={cx("item__title")}>
                            <h2 className={cx("item__title__text")}>transformer : the last night</h2>
                            <p className={cx("item__title__text")}>2019</p>
                            </ div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={cx("homeResult__chat")}>
                <div className={cx("homeResult__chat__title")}>
                    <h2 className={cx("homeResult__chat__title__text")}>Chat</h2>
                </div>
                <div className={cx("homeResult__chat__wrap")}>
                    {/* imput */}
                    <div className={cx("homeResult__chat__wrap__input")}>
                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
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
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                        <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                    </span>
                                    
                                </p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                               <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <span className={cx("count__like")}>123</span>
                                        <i className={cx("fa-solid fa-thumbs-up")}></i>
                                    </button>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-thumbs-down")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-reply")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-trash")}></i>
                                    </button>
                                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                    </p>
                                </div>
                                <div className={cx("input__reply__parent")}>
                                    <div className={cx("homeResult__chat__wrap__input")}>
                                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                                            <i className={cx("fas fa-paper-plane")}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
                                    <div className={cx("homeResult__chat__wrap__item__children")}>
                                        <div className={cx("homeResult__chat__wrap__item__img")}>
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                                        </div>
                                        <div className={cx("homeResult__chat__wrap__item__info")}>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                                    <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                                </span>
                                                
                                            </p>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Ye sdfkjdsf ljkasd aslkd j ialsdfhu pweur lasdjfsx jwadflj slkdbfYeagerCade Yeager </p>
                                        <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <span className={cx("count__like")}>123</span>
                                                    <i className={cx("fa-solid fa-thumbs-up")}></i>
                                                </button>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-thumbs-down")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-reply")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-trash")}></i>
                                                </button>
                                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                    <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                                </p>
                                            </div>
                                            <div className={cx("input__reply__parent")}>
                                                <div className={cx("homeResult__chat__wrap__input")}>
                                                    <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                                    <button className={cx("homeResult__chat__wrap__input__btn")}>
                                                        <i className={cx("fas fa-paper-plane")}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("homeResult__chat__wrap__item")}>
                            <div className={cx("homeResult__chat__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__chat__wrap__item__info")}>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                        <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                    </span>
                                    
                                </p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                               <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <span className={cx("count__like")}>123</span>
                                        <i className={cx("fa-solid fa-thumbs-up")}></i>
                                    </button>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-thumbs-down")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-reply")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-trash")}></i>
                                    </button>
                                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                    </p>
                                </div>
                                <div className={cx("input__reply__parent")}>
                                    <div className={cx("homeResult__chat__wrap__input")}>
                                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                                            <i className={cx("fas fa-paper-plane")}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
                                    <div className={cx("homeResult__chat__wrap__item__children")}>
                                        <div className={cx("homeResult__chat__wrap__item__img")}>
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                                        </div>
                                        <div className={cx("homeResult__chat__wrap__item__info")}>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                                    <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                                </span>
                                                
                                            </p>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Ye sdfkjdsf ljkasd aslkd j ialsdfhu pweur lasdjfsx jwadflj slkdbfYeagerCade Yeager </p>
                                        <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <span className={cx("count__like")}>123</span>
                                                    <i className={cx("fa-solid fa-thumbs-up")}></i>
                                                </button>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-thumbs-down")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-reply")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-trash")}></i>
                                                </button>
                                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                    <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                                </p>
                                            </div>
                                            <div className={cx("input__reply__parent")}>
                                                <div className={cx("homeResult__chat__wrap__input")}>
                                                    <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                                    <button className={cx("homeResult__chat__wrap__input__btn")}>
                                                        <i className={cx("fas fa-paper-plane")}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("homeResult__chat__wrap__item")}>
                            <div className={cx("homeResult__chat__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__chat__wrap__item__info")}>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                        <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                    </span>
                                    
                                </p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                               <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <span className={cx("count__like")}>123</span>
                                        <i className={cx("fa-solid fa-thumbs-up")}></i>
                                    </button>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-thumbs-down")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-reply")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-trash")}></i>
                                    </button>
                                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                    </p>
                                </div>
                                <div className={cx("input__reply__parent")}>
                                    <div className={cx("homeResult__chat__wrap__input")}>
                                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                                            <i className={cx("fas fa-paper-plane")}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
                                    <div className={cx("homeResult__chat__wrap__item__children")}>
                                        <div className={cx("homeResult__chat__wrap__item__img")}>
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                                        </div>
                                        <div className={cx("homeResult__chat__wrap__item__info")}>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                                    <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                                </span>
                                                
                                            </p>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Ye sdfkjdsf ljkasd aslkd j ialsdfhu pweur lasdjfsx jwadflj slkdbfYeagerCade Yeager </p>
                                        <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <span className={cx("count__like")}>123</span>
                                                    <i className={cx("fa-solid fa-thumbs-up")}></i>
                                                </button>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-thumbs-down")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-reply")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-trash")}></i>
                                                </button>
                                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                    <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                                </p>
                                            </div>
                                            <div className={cx("input__reply__parent")}>
                                                <div className={cx("homeResult__chat__wrap__input")}>
                                                    <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                                    <button className={cx("homeResult__chat__wrap__input__btn")}>
                                                        <i className={cx("fas fa-paper-plane")}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("homeResult__chat__wrap__item")}>
                            <div className={cx("homeResult__chat__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__chat__wrap__item__info")}>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                        <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                    </span>
                                    
                                </p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                               <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <span className={cx("count__like")}>123</span>
                                        <i className={cx("fa-solid fa-thumbs-up")}></i>
                                    </button>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-thumbs-down")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-reply")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-trash")}></i>
                                    </button>
                                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                    </p>
                                </div>
                                <div className={cx("input__reply__parent")}>
                                    <div className={cx("homeResult__chat__wrap__input")}>
                                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                                            <i className={cx("fas fa-paper-plane")}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
                                    <div className={cx("homeResult__chat__wrap__item__children")}>
                                        <div className={cx("homeResult__chat__wrap__item__img")}>
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                                        </div>
                                        <div className={cx("homeResult__chat__wrap__item__info")}>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                                    <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                                </span>
                                                
                                            </p>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Ye sdfkjdsf ljkasd aslkd j ialsdfhu pweur lasdjfsx jwadflj slkdbfYeagerCade Yeager </p>
                                        <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <span className={cx("count__like")}>123</span>
                                                    <i className={cx("fa-solid fa-thumbs-up")}></i>
                                                </button>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-thumbs-down")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-reply")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-trash")}></i>
                                                </button>
                                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                    <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                                </p>
                                            </div>
                                            <div className={cx("input__reply__parent")}>
                                                <div className={cx("homeResult__chat__wrap__input")}>
                                                    <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                                    <button className={cx("homeResult__chat__wrap__input__btn")}>
                                                        <i className={cx("fas fa-paper-plane")}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("homeResult__chat__wrap__item")}>
                            <div className={cx("homeResult__chat__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__chat__wrap__item__info")}>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                        <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                    </span>
                                    
                                </p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                               <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <span className={cx("count__like")}>123</span>
                                        <i className={cx("fa-solid fa-thumbs-up")}></i>
                                    </button>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-thumbs-down")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-reply")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-trash")}></i>
                                    </button>
                                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                    </p>
                                </div>
                                <div className={cx("input__reply__parent")}>
                                    <div className={cx("homeResult__chat__wrap__input")}>
                                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                                            <i className={cx("fas fa-paper-plane")}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
                                    <div className={cx("homeResult__chat__wrap__item__children")}>
                                        <div className={cx("homeResult__chat__wrap__item__img")}>
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                                        </div>
                                        <div className={cx("homeResult__chat__wrap__item__info")}>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                                    <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                                </span>
                                                
                                            </p>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Ye sdfkjdsf ljkasd aslkd j ialsdfhu pweur lasdjfsx jwadflj slkdbfYeagerCade Yeager </p>
                                        <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <span className={cx("count__like")}>123</span>
                                                    <i className={cx("fa-solid fa-thumbs-up")}></i>
                                                </button>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-thumbs-down")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-reply")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-trash")}></i>
                                                </button>
                                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                    <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                                </p>
                                            </div>
                                            <div className={cx("input__reply__parent")}>
                                                <div className={cx("homeResult__chat__wrap__input")}>
                                                    <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                                    <button className={cx("homeResult__chat__wrap__input__btn")}>
                                                        <i className={cx("fas fa-paper-plane")}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("homeResult__chat__wrap__item")}>
                            <div className={cx("homeResult__chat__wrap__item__img")}>
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                            </div>
                            <div className={cx("homeResult__chat__wrap__item__info")}>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                        <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                    </span>
                                    
                                </p>
                                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                               <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <span className={cx("count__like")}>123</span>
                                        <i className={cx("fa-solid fa-thumbs-up")}></i>
                                    </button>
                                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-thumbs-down")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-reply")}></i>
                                    </button>
                                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                        <i className={cx("fa-solid fa-trash")}></i>
                                    </button>
                                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                    </p>
                                </div>
                                <div className={cx("input__reply__parent")}>
                                    <div className={cx("homeResult__chat__wrap__input")}>
                                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                                            <i className={cx("fas fa-paper-plane")}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
                                    <div className={cx("homeResult__chat__wrap__item__children")}>
                                        <div className={cx("homeResult__chat__wrap__item__img")}>
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
                                        </div>
                                        <div className={cx("homeResult__chat__wrap__item__info")}>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                                                    <span>Mark Wahlberg <i className={cx("fas fa-check iconCheck")}></i></span> 
                                                </span>
                                                
                                            </p>
                                            <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Ye sdfkjdsf ljkasd aslkd j ialsdfhu pweur lasdjfsx jwadflj slkdbfYeagerCade Yeager </p>
                                        <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <span className={cx("count__like")}>123</span>
                                                    <i className={cx("fa-solid fa-thumbs-up")}></i>
                                                </button>
                                                <button className={cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-thumbs-down")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-reply")}></i>
                                                </button>
                                                <button className= {cx("homeResult__chat__wrap__item__info__btn__item")}>
                                                    <i className={cx("fa-solid fa-trash")}></i>
                                                </button>
                                                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                                                    <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                                                </p>
                                            </div>
                                            <div className={cx("input__reply__parent")}>
                                                <div className={cx("homeResult__chat__wrap__input")}>
                                                    <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                                                    <button className={cx("homeResult__chat__wrap__input__btn")}>
                                                        <i className={cx("fas fa-paper-plane")}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ====================================================================== */}
                        <div className={cx("homeResult__more__chat__pagination")}>
                        <button className={cx("homeResult__more__chat__pagination__item")} onClick={ () => setMoreChat(!moreChat)}>
                            {
                                moreChat ? <i className={cx("fas fa-chevron-down")}></i>
                                :<i className={cx("fas fa-chevron-up")}></i>
                            }
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeResult