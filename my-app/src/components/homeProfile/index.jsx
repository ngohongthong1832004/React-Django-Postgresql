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
  const dataUser = Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : {}

  const [isUpdate, setIsUpdate] = useState(false);
  const [isShowModalUpdateImg, setIsShowModalUpdateImg] = useState(false);
  const [firstNameChange, setFirstNameChange] = useState(dataUser?.firstName);
  const [lastNameChange, setLastNameChange] = useState(dataUser?.lastName);
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


  const handleClickUpdateInfoUser = () => {
    if(firstNameChange === "" && lastNameChange === ""){
      return toast.error('Please at least one field');
    }

    if (firstNameChange === dataUser?.firstName && lastNameChange === dataUser?.lastName){
      return toast.error('Please change at least one field');
    }
    const headers = {
      "Authorization": `Token ${Cookies.get('sessionToken')}`
    };
    const dataForm = new FormData();
    dataForm.append("first_name", firstNameChange);
    dataForm.append("last_name", lastNameChange);

    axios.post(`${import.meta.env.VITE_URL_BACKEND}update-user-info/`, dataForm, {headers})
    .then(res => {
      // console.log(res.data)
      setFirstNameChange("");
      setLastNameChange("");
      setIsUpdate(false);
      Cookies.set('userInfo', JSON.stringify({...dataUser, firstName: res.data.first_name, lastName: res.data.last_name}));
      toast.success('Update success');
      window.location.reload();
    })
    .catch(err => {
      console.log(err)
    })
    
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
  const handleUploadImg = ((file) => {
    // console.log("file : ",file)
    if (!file) {
      return toast.error('Please chose your img');
    }
    const headers = {
      "Authorization": `Token ${Cookies.get('sessionToken')}`
    };
    const formData = new FormData();
    formData.append('avatar', file); 

    axios.post(`${import.meta.env.VITE_URL_BACKEND}update-user-avatar/`, formData, {headers})
    .then(res => {
      // console.log(res.data.avatarURL)
      setIsShowModalUpdateImg(false);
      Cookies.set('userInfo', JSON.stringify({...dataUser, avatar:"http://" + res.data.avatarURL}));
      toast.success('Update success');
      // console.log("imgURLSession : ",JSON.parse(Cookies.get('userInfo')).avatar)
      window.location.reload();
    })
    .catch(err => {
      console.log(err)
    })

  })

  return (
    <div className={cx("profile", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
      {isUser && <>
        <h1>Profile Site</h1>
        <div className={cx("profile__content","grid grid-cols-10")}>
          <div className={cx("profile__content__left","relative col-span-10 sm:col-span-3")}>
            <div className={cx("profile__content__left__avatar")}>
              <img src={dataUser?.avatar === "/media/null" ? imgs.imgUser : dataUser?.avatar  } alt="avatar" />
            </div>
            <div className={cx("wrap__btn__update","absolute right-1 bottom-3")}>
                  <button className={cx("btn__update")} type="submit" onClick={handleClickUpdateImg}>
                    <i className={cx("fas fa-camera")}></i>
                  </button>
                  {isShowModalUpdateImg && <ModalConfirm result={handleUploadImg} callBack={handleCloseModal} accept={"image/*"} titleModal="Upload Avatar" typeForm={"file"} titleBtnForm={"Upload"} labelForm={"Chose your img"} />}
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
                            !isUpdate ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser?.firstName || ""}</p> : 
                            <input type="text" className={cx("homeResult__wrap__info__detail__item__text","px-3")} defaultValue={dataUser?.firstName} onChange={(e)=> setFirstNameChange(e.target.value)} />
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
                            !isUpdate ? <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser?.lastName || "" }</p> : 
                            <input type="text" className={cx("homeResult__wrap__info__detail__item__text","px-3")} defaultValue={dataUser?.lastName} onChange={(e)=> setLastNameChange(e.target.value)} />
                          }

                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info__email")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>Email </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser?.email}</p>
                      </div>
                  </div>
              </div>
              <div className={cx("profile__content__right__info__User")}>
                  <div className = {cx("homeResult__wrap__info__detail")}>
                      <div className = {cx("homeResult__wrap__info__detail__item")}>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>User </p>
                          <span>:</span>
                          <p className = {cx("homeResult__wrap__info__detail__item__text")}>{dataUser?.isSuperuser ? "Admin" : ( dataUser?.isStaff ? "Staff" : "Normal" )}</p>
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
            <div className={cx("analytics__item__title")}>My follows</div>
            <div className={cx("analytics__item__number")}>{dataUser?.countWishlist}</div>
          </div>
          <div className={cx("analytics__item","col-start-6 col-span-4 sm:col-span-1")}>
            <div className={cx("analytics__item__title")}>My Likes</div>
            <div className={cx("analytics__item__number")}>{dataUser?.countLike}</div>
          </div>
          <div className={cx("analytics__item","col-start-3 col-span-5 sm:col-span-1")}>
            <div className={cx("analytics__item__title")}>My comments</div>
            <div className={cx("analytics__item__number")}>{dataUser?.countComment}</div>
          </div>
        </div>
      </>}
    </div>
  );
};

export default HomeProfile;
