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

    const handleClickDelete = () => {
        setIsShowModelConFirm(true);
    }

    const handleCloseModalConfirm = (status) => {
        setIsShowModelConFirm(status);
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

    console.log(data)

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
                    <button className={cx("btn","btn__edit")}>Edit</button>
                    <button className={cx("btn","btn__delete")} onClick = {handleClickDelete}>Delete</button>
                    { isShowModelConFirm && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this user" />}
                </div>}
            </td>
        </tr>
    )
}

export default UserItem;