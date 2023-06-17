import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

import styles from  "./modal.module.scss";
import { ToastContainer, toast } from "react-toastify";

const cx = classNames.bind(styles);


const Modal = ({isLogin, callBack}) => {
    const [isEye, setIsEye] = useState(true);
    const [isEyeConfirm, setIsEyeConfirm] = useState(true);
    const [isPending, setIsPending] = useState(false);

    const passRef = useRef(null);
    const passRefConfirm = useRef(null);
    const modalContent = useRef(null);
    const inputEmail = useRef(null);


    useEffect(() => {
        inputEmail.current.focus();
    }, [])
    
    const handleClickRegister = (e) => {
        e.preventDefault();
        setIsPending(true);
        // email regex 
        const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if (!emailRegex.test(inputEmail.current.value)) {
            callBack(false,{
                status : false,
                message : "Email invalid"
            })
        }

        if (passRef.current.value === passRefConfirm.current.value) {
            axios
                .post(import.meta.env.VITE_URL_BACKEND+"register/",{
                    username: inputEmail.current.value,
                    password : passRef.current.value,
                    email : inputEmail.current.value,
                })
                .then(response => {
                    // console.log(response.data);
                    setIsPending(false);
                    callBack(false,{
                        status : true,
                        message : "Register success"
                    })
                })
                .catch((error) => {
                    // console.log(error);
                    setIsPending(false);
                    callBack(false, {
                        status : false,
                        message : "Register failed"
                    })
                });
        }
        else {
            setIsPending(false);
            callBack(false,{
                status : false,
                message : "Password not match"
            })
        }        
    }

    const handleClickLogin = (e) => {
        e.preventDefault();
        setIsPending(true);
        axios
            .post(import.meta.env.VITE_URL_BACKEND+'login/', {
                username: inputEmail.current.value,
                password: passRef.current.value,
            })
            .then(response => {
                console.log(response.data);
                Cookies.set('sessionToken', response.data.token);
                Cookies.set('sessionIsStaff', response.data.isStaff);
                localStorage.setItem('user_name', response.data.email);
                setIsPending(false);
                callBack(false,{
                    status : true,
                    message : "Login success",
                    isUser : true,
                })
            })
            .catch(error => {
                // console.error(error);
                setIsPending(false);
                callBack(false,{
                    status : false,
                    message : "Login failed"
                })
            });
    }

    return (

        <div className={cx("modal")} onClick={(e) => { 
            if (modalContent.current.contains(e.target)) {
                e.stopPropagation();
              } else {
                callBack(false,{status : null });
              }
        }}>
          <ToastContainer 
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss = {false}
            draggable = {false}
            pauseOnHover = {false}
            theme="dark"/>
           {
            isLogin ? 
          ( <div ref={modalContent} className={cx("modal__content")}>
                <div className={cx("modal__content__header")}>
                    <h2 className={cx("modal__content__header__title")}>Login</h2>
                    <button className={cx("modal__content__header__close")} onClick={() => callBack(false, {status : null })}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <form action="">
                    <div className={cx("modal__content__body")}>
                        <div className={cx("modal__content__body__form")}>
                            <div className={cx("modal__content__body__form__group")}>
                                <label className={cx("modal__content__body__form__group__label")} >Email :</label>
                                <input ref={inputEmail} className={cx("modal__content__body__form__group__input")} type="email" placeholder="Your email" required/>
                            </div>
                            <div className={cx("modal__content__body__form__group", "input__wrap__eye")}>
                                <label className={cx("modal__content__body__form__group__label")} >Password :</label>
                                <input  ref={passRef} className={cx("modal__content__body__form__group__input" )} type="password" placeholder="Your password" required />
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
                        { !isPending ? <button className={cx("modal__content__footer__btn")} onClick={handleClickLogin}>Login</button>
                         : <button className={cx("modal__content__footer__btn")}>Please wait a minute !!</button>}
                    </div>
                </form>
            </div>)
            : 
            (<div ref={modalContent}  className={cx("modal__content")}>
                <div className={cx("modal__content__header")}>
                    <h2 className={cx("modal__content__header__title")}>Register</h2>
                    <button className={cx("modal__content__header__close")} onClick={() => callBack(false, {status : null })}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <form >
                    <div className={cx("modal__content__body")}>
                        <div className={cx("modal__content__body__form")}>
                            <div className={cx("modal__content__body__form__group")}>
                                <label className={cx("modal__content__body__form__group__label")} >Email :</label>
                                <input ref={inputEmail} className={cx("modal__content__body__form__group__input")} type="email" placeholder="Your email" required />
                            </div>
                            <div className={cx("modal__content__body__form__group", "input__wrap__eye")}>
                                <label className={cx("modal__content__body__form__group__label")} >Password :</label>
                                <input  ref={passRef}  className={cx("modal__content__body__form__group__input" )} type="password" placeholder="Your password" required/>
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
                                <label className={cx("modal__content__body__form__group__label")} >Confirm password :</label>
                                <input  ref={passRefConfirm}  className={cx("modal__content__body__form__group__input" )} type="password" placeholder="Your confirm password" required />
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
                        { !isPending ? <button className={cx("modal__content__footer__btn")} onClick = {handleClickRegister}>Create account</button>
                        : <button className={cx("modal__content__footer__btn")}>Please wait a minute !!</button>}
                    </div>
                </form>
            </div>)
            }
        </div>
    )

}


export default Modal;
