import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

import styles from  "./modal.module.scss";

const cx = classNames.bind(styles);


const Modal = ({isLogin, callBack}) => {
    const [isEye, setIsEye] = useState(true);
    const [isEyeConfirm, setIsEyeConfirm] = useState(true);

    const passRef = useRef(null);
    const passRefConfirm = useRef(null);
    const modalContent = useRef(null);
    const inputEmail = useRef(null);


    useEffect(() => {
        inputEmail.current.focus();
    }, [])


    return (

        <div className={cx("modal")} onClick={(e) => { 
            if (modalContent.current.contains(e.target)) {
                e.stopPropagation();
              } else {
                callBack(false);
              }
        }}>
           {
            isLogin ? 
          ( <div ref={modalContent} className={cx("modal__content")}>
                <div className={cx("modal__content__header")}>
                    <h2 className={cx("modal__content__header__title")}>Login</h2>
                    <button className={cx("modal__content__header__close")} onClick={() => callBack(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <form action="">
                    <div className={cx("modal__content__body")}>
                        <div className={cx("modal__content__body__form")}>
                            <div className={cx("modal__content__body__form__group")}>
                                <label className={cx("modal__content__body__form__group__label")} >Email :</label>
                                <input ref={inputEmail} className={cx("modal__content__body__form__group__input")} type="email" placeholder="Your email" />
                            </div>
                            <div className={cx("modal__content__body__form__group", "input__wrap__eye")}>
                                <label className={cx("modal__content__body__form__group__label")} >Password :</label>
                                <input  ref={passRef} className={cx("modal__content__body__form__group__input" )} type="password" placeholder="Your password" />
                                {isEye ?
                                    <span className={cx("modal__content__body__form__group__eye")} onClick={() =>{
                                        setIsEye(!isEye);
                                        passRef.current.type = "text";
                                    }}>
                                        <i className="fas fa-eye"></i>
                                    </span>
                                :
                                    <span className={cx("modal__content__body__form__group__eye")} onClick={() =>{
                                        setIsEye(!isEye);
                                        passRef.current.type = "password";
                                    }}>
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={cx("modal__content__footer")}>
                        <button className={cx("modal__content__footer__btn")}>Login</button>
                    </div>
                </form>
            </div>)
            : 
            (<div ref={modalContent}  className={cx("modal__content")}>
                <div className={cx("modal__content__header")}>
                    <h2 className={cx("modal__content__header__title")}>Register</h2>
                    <button className={cx("modal__content__header__close")} onClick={() => callBack(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <form action="">
                    <div className={cx("modal__content__body")}>
                        <div className={cx("modal__content__body__form")}>
                            <div className={cx("modal__content__body__form__group")}>
                                <label className={cx("modal__content__body__form__group__label")} >Email :</label>
                                <input ref={inputEmail} className={cx("modal__content__body__form__group__input")} type="email" placeholder="Your email" />
                            </div>
                            <div className={cx("modal__content__body__form__group", "input__wrap__eye")}>
                                <label className={cx("modal__content__body__form__group__label")} >Password :</label>
                                <input  ref={passRef}  className={cx("modal__content__body__form__group__input" )} type="password" placeholder="Your password" />
                                {isEye ?
                                    <span className={cx("modal__content__body__form__group__eye")} onClick={() =>{
                                        setIsEye(!isEye);
                                        passRef.current.type = "text";
                                    }}>
                                        <i className="fas fa-eye"></i>
                                    </span>
                                :
                                    <span className={cx("modal__content__body__form__group__eye")} onClick={() =>{
                                        setIsEye(!isEye);
                                        passRef.current.type = "password";
                                    }}>
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                                }
                            </div>
                            <div className={cx("modal__content__body__form__group", "input__wrap__eye")}>
                                <label className={cx("modal__content__body__form__group__label")} >Password :</label>
                                <input  ref={passRefConfirm}  className={cx("modal__content__body__form__group__input" )} type="password" placeholder="Your password" />
                                {isEyeConfirm ?
                                    <span className={cx("modal__content__body__form__group__eye")} onClick={() =>{
                                        setIsEyeConfirm(!isEyeConfirm);
                                        passRefConfirm.current.type = "text";
                                    }}>
                                        <i className="fas fa-eye"></i>
                                    </span>
                                :
                                    <span className={cx("modal__content__body__form__group__eye")} onClick={() =>{
                                        setIsEyeConfirm(!isEyeConfirm);
                                        passRefConfirm.current.type = "password";
                                    }}>
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={cx("modal__content__footer")}>
                        <button className={cx("modal__content__footer__btn")}>Create account</button>
                    </div>
                </form>
            </div>)
            }
        </div>
    )

}


export default Modal;
