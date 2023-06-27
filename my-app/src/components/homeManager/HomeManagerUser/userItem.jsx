import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

import styles from "../homeManager.module.scss";
import ModalConfirm from "../../modalConfirm";

const cx = classNames.bind(styles);

const UserItem = ({data = {}}) => {

    const [isShowModelConFirm, setIsShowModelConFirm] = useState(false);
    const [isShowModelForm, setIsShowModelForm] = useState(false);

    const handleClickDelete = () => {
        setIsShowModelConFirm(true);
    }
    
    const handleClickEdit = () => {
        setIsShowModelForm(true);
    }
    const handleCloseModalConfirm = (status) => {
        setIsShowModelConFirm(status);
    }

    const handleCloseModalForm = (status) => {
        setIsShowModelForm(status);
    }

    const handleResultDelete = (status => {
        if (status) {
            // toast.success('Delete user success');
            const headers = {
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            };
    
            axios.post(`${import.meta.env.VITE_URL_BACKEND}delete-user/${data.id}`, null, { headers })
            .then(res => {
                toast.success(res.data.message)
                window.location.reload()
            })
            .catch(err => {
                toast.error(err.message)
            })
        }
    })

    const handleResultEdit = (status => {
        // console.log(status)
        if (status === "yes") {
            const headers = {
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            };
    
            axios.post(`${import.meta.env.VITE_URL_BACKEND}update-user/${data.id}`, null, { headers })
            .then(res => {
                toast.success(res.data.message)
                window.location.reload()
            })
            .catch(err => {
                toast.error(err.message)
            })
        }
        else {  
            toast.error('Please write "yes" to confirm');
        }
    })


    // console.log(data)

    return (
        <tr>
            <td className={cx('border border-slate-700','customRow')}>{data.id}</td>
            <td className={cx('border border-slate-700','customRow')}>{ !(data.first_name === "" && data.last_name === "") ? data.first_name + " " +data.last_name  : "Null"} </td>
            <td className={cx('border border-slate-700','customRow')}>{data.email}</td>
            <td className={cx('border border-slate-700','customRow')}>
                { data.is_staff ? <i className={cx("fas fa-check","text-green-500")}></i> : <i className={cx("fas fa-times","text-red-500")}></i>}

            </td>
            <td className={cx('border border-slate-700','customRow')}>
               { !data.is_superuser && <div className={cx("wrap-btn")}>
                    { !data.is_staff && <button className={cx("btn","btn__edit")} onClick = {handleClickEdit}>Edit</button>}
                    { isShowModelForm && <ModalConfirm result={handleResultEdit} callBack={handleCloseModalForm} isFormOrConfirm= {true} titleBtnForm={"YES"} labelForm="Write ' yes '" titleModal="Set user to staff"/>}
                    <button className={cx("btn","btn__delete")} onClick = {handleClickDelete}>Delete</button>
                    { isShowModelConFirm && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this user" />}
                </div>}
            </td>
        </tr>
    )
}

export default UserItem;