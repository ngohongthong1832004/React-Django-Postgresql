import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

import styles from  "./modalConfirm.module.scss";
import { ToastContainer, toast } from "react-toastify";

const cx = classNames.bind(styles);


const ModalConfirm = ({
    isFormOrConfirm = true,
    callBack = () => {},
    result = () => {},
    titleModal = "title",
    labelForm = "label",
    typeForm = "text",
    titleBtnForm = "Submit",

    textConfirm = "Are you sure ?",
    titleBtnYes = "Yes",
    titleBtnNo = "No",
    
}) => {
   
    const modalContent = useRef(null);
    const inputRef = useRef(null);

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (

        <div className={cx("modal")} onClick={(e) => { 
            if (modalContent.current.contains(e.target)) {
                e.stopPropagation();
              } else {
                callBack(false,{status : null });
              }
        }}>
        
            { 
                isFormOrConfirm ? 
                <div ref={modalContent} className={cx("modal__content")}>
                    <div className={cx("modal__content__header")}>
                        <h2 className={cx("modal__content__header__title")}>{titleModal}</h2>
                        <button className={cx("modal__content__header__close")} onClick={() => callBack(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                        <div className={cx("modal__content__body")}>
                            <div className={cx("modal__content__body__form")}>
                                <div className={cx("modal__content__body__form__group")}>
                                    <label className={cx("modal__content__body__form__group__label")} >{labelForm} :</label>
                                    <input ref={inputRef} name="avatar"  className={cx("modal__content__body__form__group__input")} onChange={handleFileChange} type={typeForm} placeholder={`${labelForm}`} required/>
                                </div>
                            </div>
                        </div>
                        <div className={cx("modal__content__footer")}>
                            <button className={cx("modal__content__footer__btn")} onClick={() =>{ result(file); callBack(false)}}>{titleBtnForm}</button>
                        </div>
                </div>
                : 
                <div ref={modalContent} className={cx("modal__content")}>
                    <div className={cx("modal__content__header")}>
                        <h2 className={cx("modal__content__header__title")}>{titleModal}</h2>
                        <button className={cx("modal__content__header__close")} onClick={() => callBack(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                        <div className={cx("modal__content__body")}>
                            <div className={cx("modal__content__body__form")}>
                                <div className={cx("modal__content__body__form__group")}>
                                    <h2 className={cx("modal__content__header__title")}>{textConfirm}</h2>
                                </div>
                            </div>
                        </div>
                        <div className={cx("modal__content__footer")}>
                            <button className={cx("modal__content__footer__btn","mx-3")} onClick={() =>{ result(true); callBack(false)}}>{titleBtnYes}</button>
                            <button className={cx("modal__content__footer__btn","mx-3")} onClick={() => callBack(false)}>{titleBtnNo}</button>
                        </div>
                </div>
            }


        </div>
    )

}


export default ModalConfirm;
