import classNames from "classnames/bind"
import { useState } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie"
import axios from "axios"

import imgs from "../../assets"
import styles from "./homeResult.module.scss"


const cx = classNames.bind(styles)


const ChildrenChat = ({data = {}, parentUser, render = () => {}}) => {
    const [isLiked , setIsLiked] = useState(false)
    const [isDisLiked , setIsDisLiked] = useState(false)
    const [isReply , setIsReply] = useState(false)

    console.log(data?.user?.username)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (parentUser.id == undefined) {
            return
        }
        // console.log("axios")
        const formData = new FormData(e.target)
        formData.append("chatItemId" , parentUser.id)
        formData.append("content" , `@${String(data?.user?.username)}: ${formData.get("content")}`)
        // formData.append("parent" , data?.id)
        let option = {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + "add-chat-reply/" , formData , option)
        .then(res => {
            setIsReply(!isReply)
            render(Math.random())
            // console.log("reply childrent")
            console.log(res.data)
        })
        .catch(err => {
            toast.error("Reply fail")
        })

    }

    const handleClickLike = () => {
        setIsLiked(!isLiked)
        if(isDisLiked){
            setIsDisLiked(!isDisLiked)
        }
    }
    const handleClickDisLike = () => {
        setIsDisLiked(!isDisLiked)
        if(isLiked){
            setIsLiked(!isLiked)
        }
    }
    const handleClickRep = () => {
        setIsReply(!isReply)
    }
    const handleClickDelete = () => {

    }

    return (
        <div className={cx("homeResult__chat__wrap__item__children__wrap")}> 
            <div className={cx("homeResult__chat__wrap__item__children")}>
                <div className={cx("homeResult__chat__wrap__item__img")}>
                <img src={data?.user?.avatar == "/media/null" ? imgs.imgUser :  import.meta.env.VITE_URL_BACKEND + data?.user?.avatar} alt="" />
                </div>
                <div className={cx("homeResult__chat__wrap__item__info")}>
                    <p className={cx("homeResult__chat__wrap__item__info__text")}>
                        <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                            <span>
                                {data?.user?.username}
                                {data?.user?.isStaff && <i className={cx("fas fa-check iconCheck")}></i>}
                                {data?.user?.isSuperuser && <i className={cx("fas fa-crown iconCrown")}></i>}
                            </span> 
                        </span>
                        
                    </p>
                    <p className={cx("homeResult__chat__wrap__item__info__text")}>{data?.content}</p>
                <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                        <button className={cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickLike}>
                            <span className={cx("count__like")}>{data?.like > 0 && data?.like}</span>
                            {!isLiked ? <i className={cx("fa-solid fa-thumbs-up")}></i> : <i className={cx("fa-solid fa-thumbs-up")} style={{color : "aqua"}}></i>} 
                        </button>
                        <button className={cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickDisLike}>
                            { !isDisLiked ? <i className={cx("fa-solid fa-thumbs-down")}></i> : <i className={cx("fa-solid fa-thumbs-down")} style ={{color:"aqua"}}></i> }
                        </button>
                        <button className= {cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickRep}>
                            <i className={cx("fa-solid fa-reply")}></i>
                        </button>
                        <button className= {cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickDelete}>
                            <i className={cx("fa-solid fa-trash")}></i>
                        </button>
                        <p className={cx("homeResult__chat__wrap__item__info__text")}>
                            <span className={cx("homeResult__chat__wrap__item__info__text__time")}>{data?.created_at}</span>
                        </p>
                    </div>
                    { isReply && <div className={cx("input__reply__parent")}>
                        <div className={cx("homeResult__chat__wrap__input")}>
                            <form onSubmit={handleSubmit}>
                                <input className={cx("homeResult__chat__wrap__input__inputEl")} name="content" type="text" placeholder="Type your message here..." />
                                <button className={cx("homeResult__chat__wrap__input__btn")}>
                                    <i className={cx("fas fa-paper-plane")}></i>
                                </button>
                            </form>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}


export default ChildrenChat