import classNames from "classnames/bind"
import { useEffect, useState, useRef } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie"
import axios from "axios"
import imgs from "../../assets"

import styles from "./homeResult.module.scss"
import ParentChat from "./parentChat"
import ItemFilm from "../itemFilm"
import SkeletonFive from "../skeleton/skeletonFive"
import SkeletonText from "../skeleton/SkeletonText"


const cx = classNames.bind(styles)




const HomeResult = () => {
    const [data, setData] = useState({})
    const [dataChat, setDataChat] = useState({})
    const [dataRecommend, setDataRecommend] = useState([])
    const [idAllWishlistLike, setIdAllWishlistLike] = useState([])
    const [idAllWishlistFollow, setIdAllWishlistFollow] = useState([])
    const [renderChat, setRenderChat] = useState(false)
    const [pageSize, setPageSize] = useState(5)
    const [AllIdLikeChatItem, setAllIdLikeChatItem] = useState([])
    const [AllIdDisLikeChatItem, setAllIdDisLikeChatItem] = useState([])
    const [allIdLikeChatReply, setAllIdLikeChatReply] = useState([])
    const [allIdDisLikeChatReply, setAllIdDisLikeChatReply] = useState([])
    const [skeletonInfo, setSkeletonInfo] = useState(false)
    const [skeletonRecommend, setSkeletonRecommend] = useState(false)
    const descriptionRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const [showDesc, setShowDesc] = useState(true);

    const descRef = useRef(null);

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let searchValue = params.get('q'); 

    // USER check
    useEffect(() => {
        if (Cookies.get('sessionToken')) {
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
                setIdAllWishlistFollow(arrIdWishlistFollow)
            })
            .catch((err) => {
                console.log(err)
            })

            axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-like-chat-item/`, option)
            .then((res) => {
                setAllIdLikeChatItem(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

            axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-dislike-chat-item/`, option)
            .then((res) => {
                setAllIdDisLikeChatItem(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

            axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-like-chat-reply/`, option)
            .then((res) => {
                setAllIdLikeChatReply(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

            axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-dislike-chat-reply/`, option)
            .then((res) => {
                setAllIdDisLikeChatReply(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },[])

    // GET RECOMMEND MOVIE AND RANDOM MOVIE
    useEffect(() => {
        const formData = new FormData()
        formData.append("searchValue", searchValue)
        axios.post(import.meta.env.VITE_URL_BACKEND + "search-movie/", formData)
        .then((res) => {
            setData(res.data.data[0])
            setSkeletonInfo(true)
            formData.append("movieId", res.data.data[0].id)
            let option = {}
            Cookies.get('sessionToken') ? option = {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Token ${Cookies.get('sessionToken')}`
                }
            }: option = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            axios.post(import.meta.env.VITE_URL_BACKEND + `get-chat-item/?page_size=${pageSize}`, formData, option)
            .then((res) => {
                setDataChat(res.data)
                setSkeletonInfo(true)
            })
            .catch((err) => {
                console.log(err)
            })

        })
        .catch((err) => {
            console.log(err)
        })

        axios.get(import.meta.env.VITE_URL_BACKEND + "get-random-movie/")
        .then((res) => {
            setDataRecommend(res.data)
            setSkeletonRecommend(true)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])

    // GET CHAT ITEM
    useEffect(() => {
        const formData = new FormData()
        // console.log("data?.id : ",data)
        formData.append("movieId", data?.id)

        if (data.id == undefined){
            return
        }else {
            let option = {}

            if (Cookies.get('sessionToken')){ 
                option = {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Token ${Cookies.get('sessionToken')}`
                    }
                    }
            }else {
                option = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
            }}

            axios.post(import.meta.env.VITE_URL_BACKEND + `get-chat-item/?page_size=${pageSize}`, formData, option)
            .then((res) => {
                setDataChat(res.data)
            })
            .catch((err) => {
                console.log(err)
            })  

            if (Cookies.get('sessionToken')){
                axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-like-chat-item/`, option)
                .then((res) => {
                    setAllIdLikeChatItem(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })

                axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-dislike-chat-item/`, option)
                .then((res) => {
                    setAllIdDisLikeChatItem(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })

                axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-like-chat-reply/`, option)
                .then((res) => {
                    setAllIdLikeChatReply(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })

                axios.get(import.meta.env.VITE_URL_BACKEND + `get-all-id-dislike-chat-reply/`, option)
                .then((res) => {
                    setAllIdDisLikeChatReply(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
         }
       
    },[renderChat, pageSize])


    const handleClickLike = () => {
        if (!Cookies.get('sessionToken')){
            toast.error("Please login to like this movie")
            return
        }

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
        if (!Cookies.get('sessionToken')){
            toast.error("Please login to follow this movie")
            return
        }
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

    const handleSendChat = (e) => {
        e.preventDefault()
        if (!Cookies.get('sessionToken')){
            toast.error("Please login to comment")
            return
        }
        const formData = new FormData(e.target)
        const value = Object.fromEntries(formData)
        if (value.content.trim() == ""){
            return 
        }
        formData.append("movieId", data.id)
        const option = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + "add-chat-item/", formData, option)
        .then((res) => {
            setRenderChat(!renderChat)
            e.target.reset()
            let dataInfo = JSON.parse(Cookies.get("userInfo"))
            dataInfo.countComment += 1
            Cookies.set("userInfo" , JSON.stringify(dataInfo))
        })
        .catch((err) => {
            console.log(err)
        })


    }

    const handleClickPaginationChat = () => {
        if (dataChat?.pagination?.total > pageSize){
            setPageSize(pageSize + 5)
        }
    }
    

    const handleSeeMore = () => {
        setShowDesc(!showDesc);
        setShowButton(!showButton);
    };

    useEffect(() => {
        if (skeletonInfo) {
            const lineHeight = parseFloat(getComputedStyle(descriptionRef?.current)?.lineHeight);
            const descriptionHeight = descriptionRef.current.clientHeight;
            const lineCount = Math.round(descriptionHeight / lineHeight);
            if (lineCount > 3) {
                setShowButton(true);
                setShowDesc(false);
            }
        }
      }, [skeletonInfo]);


    return (
        <div className={cx("homeResult","container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <div className={cx("homeResult__wrap")}>
                <div className = {cx("homeResult__wrap__img")}>
                    { skeletonInfo ? <img
                        src={data?.img}
                        onError={(e) => {
                            e.target.src = imgs.noImage; // Replace with the path to your fallback image
                            e.target.onerror = null; // Prevent infinite fallback loop if fallback image also fails
                        }}
                        alt="Fallback Image"
                    /> : <SkeletonText className={"h-64"} tagName = "div" /> }
                     
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
                        { skeletonInfo ? <h1 className = {cx("homeResult__wrap__info__title__text")}>{data?.name}</h1> : <SkeletonText className={"h-12 mb-5"} tagName = "h1" />}
                    </div>
                    { data?.subName != "null" && <div className = {cx("homeResult__wrap__info__subTitle")}>
                        { true ? <h2 className = {cx("homeResult__wrap__info__subTitle__text")}>{data?.subName}</h2> : <SkeletonText tagName = "h2" />}
                    </div>}
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Genre </p>
                            <span>:</span>
                            { skeletonInfo ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.genres}</p> : <SkeletonText tagName = "p" />}
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Release </p>
                            <span>:</span>
                            { skeletonInfo ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.releaseDate}</p> : <SkeletonText tagName = "p" />}
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Length </p>
                            <span>:</span>
                            { skeletonInfo ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.length}</p> : <SkeletonText tagName = "p" />}
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Cast </p>
                            <span>:</span>
                            { skeletonInfo ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.casts}</p> : <SkeletonText tagName = "p" />}
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>countries </p>
                            <span>:</span>
                            { skeletonInfo ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.countries}</p> : <SkeletonText tagName = "p" />}
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Production </p>
                            <span>:</span>
                            { skeletonInfo ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{data?.productions}</p> : <SkeletonText tagName = "p" />}
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Desc </p>
                            <span>:</span>
                            { skeletonInfo ? <div className = {cx("homeResult__wrap__info__detail__item__text")}>
                                    <p className={cx(`homeResult__wrap__info__detail__item__text__more${showDesc ? "--active" : "--active2"}`)} ref={descriptionRef} >{data?.desc}</p>
                                    { showButton  && <label onClick={handleSeeMore} className={cx("btn__more")}>See more</label>}
                                    </div> : 
                               <SkeletonText className={"h-20"} tagName = "h1" />
                            }
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
                   {skeletonRecommend ? <div className={cx("homeResult__more__recommend__wrap", "grid grid-cols-6 gap-5 sm:grid-cols-5" )}>
                       {dataRecommend?.map((item, index) => {
                            if (index == 3){
                                return (
                                    <ItemFilm className={cx(" col-span-2 col-start-2 sm:col-span-1 ")} key={index} data={item} />
                                )
                            }else {
                                return (
                                    <ItemFilm className={cx(" col-span-2 sm:col-span-1")} key={index} data={item} />
                                )
                            }
                        })
                       }
                    </div> : <SkeletonFive />}
                </div>
            </div>
            <div className={cx("homeResult__chat")}>
                <div className={cx("homeResult__chat__title")}>
                    <h2 className={cx("homeResult__chat__title__text")}>Chat</h2>
                </div>
                <div className={cx("homeResult__chat__wrap")}>
                    {/* input */}
                    <div className={cx("homeResult__chat__wrap__input")}>
                        <form onSubmit={handleSendChat}>
                            <input className={cx("homeResult__chat__wrap__input__inputEl")} name="content" type="text" placeholder="Type your message here..." />
                            <button className={cx("homeResult__chat__wrap__input__btn")}>
                                <i className={cx("fas fa-paper-plane")}></i>
                            </button>
                        </form>
                    </div>
                    <span className={cx("countComment")}><span>{dataChat?.pagination?.total}</span> { dataChat?.pagination?.total > 1 ? "comments" : "comment"}</span>
                    {/* chat */}
                    <div className={cx("homeResult__chat__wrap__chat")}>
                        {dataChat?.data?.map((item, index) => {
                            return (
                                <ParentChat key={index} data={item} checkLikeAndDisLike = {{like: AllIdLikeChatItem, dislike : AllIdDisLikeChatItem}} checkLikeAndDisLikeChildren = {{like: allIdLikeChatReply, dislike : allIdDisLikeChatReply}} render={(e) => setRenderChat(e)} />
                            )
                        })}                       
                        {/* ====================================================================== */}
                        { dataChat?.pagination?.max_page != 1 && <div className={cx("homeResult__more__chat__pagination","my-3")} >
                            <button className={cx("homeResult__more__chat__pagination__item")} onClick={handleClickPaginationChat}>
                                <i className={cx("fas fa-chevron-down")}></i>
                            </button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeResult