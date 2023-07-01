import classNames from "classnames/bind"
import { useState, useRef } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie"
import axios from "axios"

import imgs from "../../assets"
import styles from "./homeResult.module.scss"
import ModalConfirm from "../modalConfirm"


const cx = classNames.bind(styles)


const ChildrenChat = ({
    data = {},
    parentUser,
    render = () => {},
    checkLikeAndDisLikeChildren = {},

    }) => {

    const likeArr = checkLikeAndDisLikeChildren?.like?.map(item => item.id)
    const disLikeArr = checkLikeAndDisLikeChildren?.dislike?.map(item => item.id)

    const [isLiked , setIsLiked] = useState(likeArr?.includes(data?.id))
    const [isDisLiked , setIsDisLiked] = useState(disLikeArr?.includes(data?.id))
    const [isReply , setIsReply] = useState(false)
    const [isShowModal , setIsShowModal] = useState(false)
    const [like , setLike] = useState(data?.like)
    const inputRef = useRef(null)

    // console.log(checkLikeAndDisLikeChildren)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Cookies.get('sessionToken')){
            toast.error("Please login to send comment")
            return
        }
        if (parentUser.id == undefined) {
            return
        }
        // console.log("axios")
        const formData = new FormData(e.target)
        formData.append("chatItemId" , parentUser.id)
        formData.append("content" , `@${String(data?.user?.username).trim()}: ${formData.get("content")}`)
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
        })
        .catch(err => {
            toast.error("Reply fail")
        })

    }

    const handleClickLike = () => {
        if (!Cookies.get('sessionToken')){
            toast.error("Please login to like comment")
            return
        }
        setIsLiked(!isLiked)
        setLike(like + 1)
        if(isDisLiked){
            setIsDisLiked(!isDisLiked)
        }

        let option = {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + `like-chat-reply/${data?.id}`,null , option)
        .then(res => {
            // render(Math.random())
            // console.log(res.data)
        })
        .catch(err => {
            toast.error("like fail")
        })

    }

    const handleClickDisLike = () => {
        if (!Cookies.get('sessionToken')){
            toast.error("Please login to dislike comment")
            return
        }
        setIsDisLiked(!isDisLiked)
        setLike(like - 1)
        if(isLiked){
            setIsLiked(!isLiked)
        }

        let option = {
            headers : {
                "Authorization" : `Token ${Cookies.get("sessionToken")}`
            }
        }
        axios.post(import.meta.env.VITE_URL_BACKEND + `dislike-chat-reply/${data?.id}`,null , option)
        .then(res => {
            // render(Math.random())
            // console.log(res.data)
        })
        .catch(err => {
            toast.error("like fail")
        })
    }

    const handleClickRep = () => {
        setIsReply(!isReply)
        setTimeout(() => {
            inputRef.current.focus()
        }, 100);
    }

    const handleResultDelete = (status) => {
        if (status == true) {
            let option = {
                headers : {
                    "Authorization" : `Token ${Cookies.get("sessionToken")}`
                }
            }
            axios.post(import.meta.env.VITE_URL_BACKEND + `delete-chat-reply/${data?.id}`,null , option)
            .then(res => {
                toast.success("Delete success")
                render(Math.random())
            })
            .catch(err => {
                toast.error("Delete fail")
            })
        }
    }

    const handleCloseModalConfirm = (status) => {
        setIsShowModal(status)
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
                            <span className={cx("count__like")}>{like > 0 && like}</span>
                            {!isLiked ? <i className={cx("fa-solid fa-thumbs-up")}></i> : <i className={cx("fa-solid fa-thumbs-up")} style={{color : "aqua"}}></i>} 
                        </button>
                        <button className={cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickDisLike}>
                            { !isDisLiked ? <i className={cx("fa-solid fa-thumbs-down")}></i> : <i className={cx("fa-solid fa-thumbs-down")} style ={{color:"aqua"}}></i> }
                        </button>
                        <button className= {cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickRep}>
                            <i className={cx("fa-solid fa-reply")}></i>
                        </button>
                        { data?.user?.isDelete && <button className= {cx("homeResult__chat__wrap__item__info__btn__item")} onClick={() => setIsShowModal(true)}>
                            <i className={cx("fa-solid fa-trash")}></i>
                        </button>}
                        { isShowModal && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this comment" />}
                        <p className={cx("homeResult__chat__wrap__item__info__text")}>
                            <span className={cx("homeResult__chat__wrap__item__info__text__time")}>{data?.created_at}</span>
                        </p>
                    </div>
                    { isReply && <div className={cx("input__reply__parent")}>
                        <div className={cx("homeResult__chat__wrap__input")}>
                            <form onSubmit={handleSubmit}>
                                <input className={cx("homeResult__chat__wrap__input__inputEl")} ref={inputRef} name="content" type="text" placeholder="Type your message here..." />
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