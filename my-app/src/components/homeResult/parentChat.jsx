import classNames from "classnames/bind"
import { useState } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie"


import styles from "./homeResult.module.scss"
import ChildrenChat from "./childrenChat"

const cx = classNames.bind(styles)


const ParentChat = () => {
    const [moreChat, setMoreChat] = useState(true)
    const [isVipUser , setIsVipUser] = useState(false)
    const [isCheckUser , setIsCheckUser] = useState(false)
    const [isLiked , setIsLiked] = useState(false)
    const [isDisLiked , setIsDisLiked] = useState(false)
    const [isReply , setIsReply] = useState(false)


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
        <div className={cx("homeResult__chat__wrap__item")}>
            <div className={cx("homeResult__chat__wrap__item__img")}>
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" />
            </div>
            <div className={cx("homeResult__chat__wrap__item__info")}>
                <p className={cx("homeResult__chat__wrap__item__info__text")}>
                    <span className={cx("homeResult__chat__wrap__item__info__text__name")}>
                        <span>
                            Mark Wahlberg 
                            {isCheckUser && <i className={cx("fas fa-check iconCheck")}></i>}
                            {isVipUser && <i className={cx("fas fa-crown iconCrown")}></i>}
                        </span> 
                    </span>
                    
                </p>
                <p className={cx("homeResult__chat__wrap__item__info__text")}>Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager C Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade  Cade Yeager Cade Yeager Cade YeagerCade Yeager Cade Yeager Cade YeagerCade Yeager </p>
                <div className={cx("homeResult__chat__wrap__item__info__btn")}>
                    <button className={cx("homeResult__chat__wrap__item__info__btn__item")} onClick={handleClickLike}>
                        <span className={cx("count__like")}>123</span>
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
                        <span className={cx("homeResult__chat__wrap__item__info__text__time")}>12:00</span>
                    </p>
                </div>
               {isReply && <div className={cx("input__reply__parent")}>
                    <div className={cx("homeResult__chat__wrap__input")}>
                        <input className={cx("homeResult__chat__wrap__input__inputEl")} type="text" placeholder="Type your message here..." />
                        <button className={cx("homeResult__chat__wrap__input__btn")}>
                            <i className={cx("fas fa-paper-plane")}></i>
                        </button>
                    </div>
                </div>}
                {/* chat reply */}
                <ChildrenChat />
                <ChildrenChat />
                <ChildrenChat />
                <ChildrenChat />
                {/* ====================================================================== */}
                <div className={cx("homeResult__more__chat__pagination")}>
                    <button className={cx("homeResult__more__chat__pagination__item")} onClick={ () => setMoreChat(!moreChat)}>
                        {
                            moreChat ? <i className={cx("fas fa-chevron-down")}></i>
                            :<i className={cx("fas fa-chevron-up")}></i>
                        }
                    </button>
                </div>
                <br/>
            </div>
        </div>

    )
}


export default ParentChat