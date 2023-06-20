import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';
import axios from "axios";

import imgs from "../../assets";
import styles from "./homeProfile.module.scss";
import ModalConfirm from "../modalConfirm";

const cx = classNames.bind(styles);


const HomeProfile = () => {
  const navigate = useNavigate();
  const isUser = Cookies.get('sessionToken');
  const [isUpdate, setIsUpdate] = useState(false);
  const [isShowModalUpdateImg, setIsShowModalUpdateImg] = useState(false);
  const [firstNameChange, setFirstNameChange] = useState("");
  const [lastNameChange, setLastNameChange] = useState("");
  const [dataUser, setDataUser] = useState({});
  // const [valueResultForm, setValueResultForm] = useState(null);

  useEffect(() => {
    const loader = async () => {
      if (!isUser) {
        toast.error('Please login to access this page');
        return navigate("/");
      }
      return null;
    };
    loader();
  }, []);  

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Token " + Cookies.get('sessionToken')
      }
    };
  
    axios.get(import.meta.env.VITE_URL_BACKEND + 'get-user-info/', config)
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickUpdateInfoUser = () => {
    if(firstNameChange === "" || lastNameChange === ""){
      return toast.error('Please fill all field');
    }
    // console.log("change :", firstNameChange, lastNameChange)
    setFirstNameChange("");
    setLastNameChange("");
    setIsUpdate(false);
    toast.success('Update success');
  }
  const handleClickChangeToUpdate = (() => {
    setIsUpdate(true);
  })

  const handleClickUpdateImg = (() => {
    setIsShowModalUpdateImg(true);
  })

  const handleCloseModal = ((status) => {
    setIsShowModalUpdateImg(status);
  })
  const handleUploadImg = ((payload) => {
    // console.log(payload)
  })
  return (
    <div className={cx("profile", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
      {isUser && <>
        <h1>Profile Site</h1>
        <div className={cx("profile__content","grid grid-cols-10")}>
          <div className={cx("profile__content__left","relative col-span-10 sm:col-span-3")}>
            <div className={cx("profile__content__left__avatar")}>
              <img src={imgs.imgUser} alt="avatar" />
            </div>
            <div className={cx("wrap__btn__update","absolute right-1 bottom-3")}>
                  <button className={cx("btn__update")} type="submit" onClick={handleClickUpdateImg}>
                    <i className={cx("fas fa-camera")}></i>
                  </button>
                  {isShowModalUpdateImg && <ModalConfirm result={handleUploadImg} callBack={handleCloseModal} titleModal="Upload Avatar" typeForm={"file"} titleBtnForm={"Upload"} labelForm={"Chose your img"} />}
              </div>
          </div>
          <div className={cx("profile__content__right","relative col-span-10 sm:col-span-7")}>
            <div className = {cx("profile__content__right__title")}>
              <h2>Basic Profile</h2>
            </div>
            <div className = {cx("profile__content__right__info")}>
              <div className={cx("profile__content__right__info__firstName")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>First name </p>
                          <span>:</span>
                          {
                            !isUpdate ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser.firstname}</p> : 
                            <input type="text" className={cx("homeResult__wrap__info__detail__item__text","px-3")} value={firstNameChange} onChange={(e)=> setFirstNameChange(e.target.value)} />
                          }

                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info__lastName")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>Last name </p>
                          <span>:</span>
                          {
                            !isUpdate ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser.lastname}</p> : 
                            <input type="text" className={cx("homeResult__wrap__info__detail__item__text","px-3")} value={lastNameChange} onChange={(e)=> setLastNameChange(e.target.value)} />
                          }

                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info__email")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>Email </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser.email}</p>
                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info__User")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>User </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser.superuser ? "Admin" : ( dataUser.isStaff ? "Staff" : "Normal" )}</p>
                      </div>
                  </div>
              </div>
              <br/>
              <br/>
              <div className={cx("wrap__btn__update","absolute right-1 bottom-3")}>
                  { !isUpdate ? <button className={cx("btn__update")} onClick={handleClickChangeToUpdate}>
                    <i className={cx("fas fa-user-edit","pr-3")}></i>
                    Update
                  </button> :
                  <>
                    <button className={cx("btn__update")} onClick={() => setIsUpdate(false)}>
                      <i className={cx("fas fa-cancel","pr-3")}></i>
                      Cancel
                    </button>
                    <button className={cx("btn__update")}  onClick={handleClickUpdateInfoUser}>
                      <i className={cx("fas fa-save","pr-3")}></i>
                      Save
                    </button>
                  </>
                  }
              </div>
            </div>
          </div>
        </div>
        <div className={cx("analytics","grid grid-cols-9 sm:grid-cols-3 ")}>
          <div className={cx("analytics__item","col-start-1 col-span-4 sm:col-span-1")}>
            <div className={cx("analytics__item__title")}>My wishlist</div>
            <div className={cx("analytics__item__number")}>0</div>
          </div>
          <div className={cx("analytics__item","col-start-6 col-span-4 sm:col-span-1")}>
            <div className={cx("analytics__item__title")}>My Likes</div>
            <div className={cx("analytics__item__number")}>0</div>
          </div>
          <div className={cx("analytics__item","col-start-3 col-span-5 sm:col-span-1")}>
            <div className={cx("analytics__item__title")}>My comments</div>
            <div className={cx("analytics__item__number")}>0</div>
          </div>
        </div>
      </>}
    </div>
  );
};

export default HomeProfile;
