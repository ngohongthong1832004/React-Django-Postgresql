import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie"
import axios from "axios"

import styles from "./homeResult.module.scss"
import ParentChat from "./parentChat"
import ItemFilm from "../itemFilm"


const cx = classNames.bind(styles)




const HomeResult = () => {
    const [moreCast, setMoreCast] = useState(true)
    const [moreChat, setMoreChat] = useState(true)
    const [moreRecommend, setMoreRecommend] = useState(true)
    const [isLiked, setIsLiked] = useState(false)
    const [isFollowed, setIsFollowed] = useState(false)
    const [data, setData] = useState({})
    const [dataRecommend, setDataRecommend] = useState([])
    const [idAllWishlistLike, setIdAllWishlistLike] = useState([])
    const [idAllWishlistFollow, setIdAllWishlistFollow] = useState([])

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let searchValue = params.get('q'); 
    console.log(searchValue)

    useEffect(() => {
        const option = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            }
        }
      
        axios.get(import.meta.env.VITE_URL_BACKEND + "get-all-id-movie-wishlist-like/", option)
        .then(res => {
            const arrIdWishlistLike = res.data.map((item) => {
                return item.id
            })
            console.log("arrIdWishlistLike : ",arrIdWishlistLike)
            setIdAllWishlistLike(arrIdWishlistLike)
        })
        .catch((err) => {
            console.log(err)
        })

       
        axios.get(import.meta.env.VITE_URL_BACKEND + "get-all-id-movie-wishlist-follow/", option)
        .then(res => {
            const arrIdWishlistFollow = res.data.map((item) => {
                return item.id
            })
            console.log("arrIdWishlistFollow : ",arrIdWishlistFollow)
            setIdAllWishlistFollow(arrIdWishlistFollow)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])
    useEffect(() => {
        const formData = new FormData()
        formData.append("searchValue", searchValue)
        axios.post(import.meta.env.VITE_URL_BACKEND + "search-movie/", formData)
        .then((res) => {
            console.log(res.data)
            setData(res.data.data[0])
        })
        .catch((err) => {
            console.log(err)
        })


        axios.get(import.meta.env.VITE_URL_BACKEND + "get-random-movie/")
        .then((res) => {
            console.log(res.data)
            setDataRecommend(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])

    const handleClickLike = () => {
            const formData = new FormData()
            formData.append("movieId", data.id)

            const option = {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Token ${Cookies.get('sessionToken')}`
                }
            }
            axios.post(import.meta.env.VITE_URL_BACKEND + "toggle-wishlist-like/",formData, option)
            .then((res) => {
                toast.success(res.data.message)
                let dataInfo = JSON.parse(Cookies.get("userInfo"))
                if (res.data.message.includes("Add")){
                    dataInfo.countLike = dataInfo.countLike + 1
                }else {
                    dataInfo.countLike = dataInfo.countLike - 1
                }
                Cookies.set("userInfo", JSON.stringify(dataInfo))
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleClickFollow = () => {
        const formData = new FormData()
        formData.append("movieId", data.id)

        const option = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + "toggle-wishlist-follow/",formData, option)
        .then((res) => {
            toast.success(res.data.message)
            let dataInfo = JSON.parse(Cookies.get("userInfo"))
            if (res.data.message.includes("Add")){
                dataInfo.countWishlist = dataInfo.countWishlist + 1
            }else {
                dataInfo.countWishlist = dataInfo.countWishlist - 1
            }

            Cookies.set("userInfo", JSON.stringify(dataInfo))
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    

    return (
        <div className={cx("homeResult","container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <div className={cx("homeResult__wrap")}>
                <div className = {cx("homeResult__wrap__img")}>
                    <img src={data?.img} alt="" />
                    <div className = {cx("homeResult__wrap__img__desc")}>
                        <p className = {cx("homeResult__wrap__img__desc__text")}>
                            <span className = {cx("homeResult__wrap__img__desc__text__span")}>{data?.star}</span>
                            <label className = {cx("homeResult__wrap__img__desc__text__label")}>
                                <i className = {cx("fas fa-star")}></i>
                            </label>
                        </p>
                        <p className = {cx("homeResult__wrap__img__desc__horizon")}>|</p>
                        <p className = {cx("homeResult__wrap__img__desc__text")}>
                        <span className = {cx("homeResult__wrap__img__desc__text__span")}>{data?.IMDb}</span>
                            <label className = {cx("homeResult__wrap__img__desc__text__label")}>
                                IMDb
                            </label>
                        </p>
                    </div>
                    <div className = {cx("homeResult__wrap__img__btn")}>
                        <button className = {cx("homeResult__wrap__img__btn__item")} onClick={handleClickLike}>
                            <p className = {cx("homeResult__wrap__img__btn__item__text")}>Like</p>
                            { !idAllWishlistLike.includes(data?.id) ? <i className = {cx("fas fa-heart")}></i> : <i className = {cx("fas fa-heart")} style={{color : "red"}}></i>  }
                        </button>
                        <button className = {cx("homeResult__wrap__img__btn__item")} onClick={handleClickFollow}>
                            <p className = {cx("homeResult__wrap__img__btn__item__text")}>Follow</p>
                            { !idAllWishlistFollow.includes(data?.id) ? <i className = {cx("fas fa-plus")}></i> : <i className = {cx("fas fa-check")} style={{color : "aqua"}}></i> }
                        </button>
                    </div>
                </div>
                <div className = {cx("homeResult__wrap__info")}>
                    <div className = {cx("homeResult__wrap__info__title")}>
                        <h1 className = {cx("homeResult__wrap__info__title__text")}>{data?.name}</h1>
                    </div>
                    { data?.subName != "null" && <div className = {cx("homeResult__wrap__info__subTitle")}>
                        <h2 className = {cx("homeResult__wrap__info__subTitle__text")}>{data?.subName}</h2>
                    </div>}
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Genre </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.genres}</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Release </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.releaseDate}</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Length </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.length}</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Cast </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.casts}</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>countries </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.countries}</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Production </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.productions}</p>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Desc </p>
                            <span>:</span>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("homeResult__more")}>
                {/* <div className={cx("homeResult__more__cast")}>      
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
                </div> */}
                <div className={cx("homeResult__more__recommend")}>
                    <div className={cx("homeResult__more__recommend__title")}>
                        <h2 className={cx("homeResult__more__recommend__title__text")}>Recommend</h2>
                    </div>
                    <div className={cx("homeResult__more__recommend__wrap", "grid grid-cols-6 gap-5 sm:grid-cols-5" )}>
                       {dataRecommend?.map((item, index) => {
                            return (
                             <ItemFilm key={index} data={item} />
                            )
                        })
                       }
                    </div>

                </div>
            </div>
            <div className={cx("homeResult__chat")}>
                <div className={cx("homeResult__chat__title")}>
                    <h2 className={cx("homeResult__chat__title__text")}>Chat</h2>
                </div>
                <div className={cx("homeResult__chat__wrap")}>
                    {/* input */}
                    <div className={cx("homeResult__chat__wrap__input")}>
                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                            <i className={cx("fas fa-paper-plane")}></i>
                        </button>
                    </div>
                    {/* chat */}
                    <div className={cx("homeResult__chat__wrap__chat")}>
                        <ParentChat />
                        <ParentChat />
                        {/* ====================================================================== */}
                        <div className={cx("homeResult__more__chat__pagination")} >
                            <button className={cx("homeResult__more__chat__pagination__item")} onClick={ () => setMoreChat(!moreChat)} style={{width : "100%"}}>
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