import classNames from "classnames/bind"
import { useState, useRef } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie"
import imgs from "../../assets"
import axios from "axios"
import ModalConfirm from "../modalConfirm"


import styles from "./homeResult.module.scss"
import ChildrenChat from "./childrenChat"

const cx = classNames.bind(styles)


const ParentChat = ({
    data = {},
    render = () => {},
    checkLikeAndDisLike =  {},
    checkLikeAndDisLikeChildren = {},
    }) => {
    
    const arrIdLike = checkLikeAndDisLike?.like?.map(item => item.id) 
    const arrIdDisLike = checkLikeAndDisLike?.dislike?.map(item => item.id)
    const [isLiked , setIsLiked] = useState(arrIdLike?.includes(data?.data?.chatItem?.id))
    const [isDisLiked , setIsDisLiked] = useState(arrIdDisLike?.includes(data?.data?.chatItem?.id))
    const [isReply , setIsReply] = useState(false)
    const [isShowModal , setIsShowModal] = useState(false)
    const [pageChildren , setPageChildren] = useState(0)
    const inputRef = useRef(null)
    const [like , setLike] = useState(data?.data?.chatItem?.like)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("chatItemId" , data?.data?.chatItem?.id)
        let option = {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + "add-chat-reply/" , formData , option)
        .then(res => {
            setTimeout(() => {
                render(Math.random())
            }, 1000);
            if ( pageChildren == 0 ) setPageChildren(pageChildren + 3)
            setIsReply(!isReply)

        })
        .catch(err => {
            toast.error("Reply fail")
        })
    }

    const handleClickLike = () => {
        setIsLiked(!isLiked)
        setLike(like + 1)
        if(isDisLiked){
            setIsDisLiked(!isDisLiked)
        }

        axios.post(import.meta.env.VITE_URL_BACKEND + `like-chat-item/${data?.data?.chatItem?.id}` , null , {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        })
        .then(res => {
            // render(Math.random())
        })
        .catch(err => {
            toast.error("Like fail")
        })

    }
    const handleClickDisLike = () => {
        setIsDisLiked(!isDisLiked)
        setLike(like - 1)
        if(isLiked){
            setIsLiked(!isLiked)
        }

        axios.post(import.meta.env.VITE_URL_BACKEND + `dislike-chat-item/${data?.data?.chatItem?.id}` , null , {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        })
        .then(res => {
            // render(Math.random())
            // console.log(res.data)
        })
        .catch(err => {
            toast.error("dislike fail")
        })
    }
    const handleClickRep = () => {
        setIsReply(!isReply)
        setTimeout(() => {
            inputRef?.current?.focus()
        }, 100);
    }
    const handleResultDelete = () => {
        let option = {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + `delete-chat-item/${data?.data?.chatItem?.id}`,null , option)
        .then(res => {
            toast.success("Delete success")
            render(Math.random())
        })
        .catch(err => {
            toast.error("Delete fail")
        })
    }
    const handleCloseModalConfirm = (status) => {
        setIsShowModal(status)
    }

    
    return (
        <div className={cx("homeResult__chat__wrap__item")}>
            <div className={cx("homeResult__chat__wrap__item__img")}>
                <img src={data?.data?.user?.avatar == "/media/null" ? imgs.imgUser :  import.meta.env.VITE_URL_BACKEND + data?.data?.user?.avatar} alt="" />
            </div>
            <div className={cx("homeResult__chat__wrap__item__info")}>
                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                        <span>
                            {data?.data?.user?.username} 
                            {data?.data?.user?.isStaff && <i className={cx("fas fa-check iconCheck")}></i>}
                            {data?.data?.user?.isSuperuser && <i className={cx("fas fa-crown iconCrown")}></i>}
                        </span> 
                    </span>
                </p>
                <p className={cx("homeResult__chat__wrap__item__info__text")}>{data?.data?.chatItem?.content}</p>
                <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickLike}>
                        <span className={cx("count__like")}>{like > 0 && like}</span>
                        {!isLiked ? <i className={cx("fa-solid fa-thumbs-up")}></i> : <i className={cx("fa-solid fa-thumbs-up")} style={{color : "aqua"}}></i>} 
                    </button>
                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickDisLike}>
                        { !isDisLiked ? <i className={cx("fa-solid fa-thumbs-down")}></i> : <i className={cx("fa-solid fa-thumbs-down")} style ={{color:"aqua"}}></i> }
                    </button>
                    <button className= {cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickRep}>
                        <i className={cx("fa-solid fa-reply")}></i>
                    </button>
                    {data?.data?.chatItem?.isDelete && <button className= {cx("homeResult__chat__wrap__item__info__btn__item")} onClick={() => setIsShowModal(true)}>
                        <i className={cx("fa-solid fa-trash")}></i>
                    </button>}
                    { isShowModal && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this comment" />}
                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>{data?.data?.chatItem?.created_at}</span>
                    </p>
                </div>
               {isReply && <div className={cx("input__reply__parent")}>
                    <div className={cx("homeResult__chat__wrap__input")}>
                        <form onSubmit={handleSubmit}>
                            <input className={cx("homeResult__chat__wrap__input__inputEl")} ref={inputRef} name="content" type="text" placeholder="Type your message here..." />
                            <button className={cx("homeResult__chat__wrap__input__btn")}>
                                <i className={cx("fas fa-paper-plane")}></i>
                            </button>
                        </form>
                    </div>
                </div>}
                {/* chat reply */}
                {data?.data?.chatReply?.data?.map((item , index) => {
                    if (index < pageChildren){
                        return <ChildrenChat key={index} data={item} parentUser = {{id :data?.data?.chatItem?.id, name:data?.data?.user?.username }} render={render} checkLikeAndDisLikeChildren = {checkLikeAndDisLikeChildren}/>
                    }
                })}
                { data?.data?.chatReply?.data?.length > 0 && <div className={cx("homeResult__more__chat__pagination")} style={{justifyContent: "left"}}>
                    <button className={cx("homeResult__more__chat__pagination__item")} style={{backgroundColor: "transparent", boxShadow : "none"}}>
                        { pageChildren == 0 &&  <div onClick={() => setPageChildren(pageChildren + 3)}>
                            <span>See reply </span>
                            <i className={cx("fas fa-chevron-down")}></i>
                        </div> }
                        { pageChildren > 0  && ( pageChildren < data?.data?.chatReply?.data?.length ? 
                            <div>
                                <span onClick={() => setPageChildren(pageChildren + 3)}>
                                    <span>See more</span>
                                    <i className={cx("fas fa-chevron-down")}></i>
                                </span>
                                <span onClick={() => setPageChildren(0)}>Close reply</span>
                            </div> : 
                            <div>
                                <span onClick={() => setPageChildren(pageChildren - 3)}>
                                    <span>See less</span>
                                    <i className={cx("fas fa-chevron-up","mr-5")}></i>
                                </span>
                                <span onClick={() => setPageChildren(0)}>Close reply</span>
                            </div>)}
                    </button>
                </div>}
            </div>
        </div>

    )
}


export default ParentChat