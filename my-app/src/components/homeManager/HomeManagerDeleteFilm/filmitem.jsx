import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import styles from "../homeManager.module.scss";
import ModalConfirm from "../../modalConfirm";

const cx = classNames.bind(styles);

const FilmItem = ({
    data = []

    }) => {

    const navigate = useNavigate();
    const [isShowModelConFirm, setIsShowModelConFirm] = useState(false);
    const [isShowModelConFirm2, setIsShowModelConFirm2] = useState(false);

    // console.log(data)
    const handleClickDelete = () => {
        // show modal confirm
        setIsShowModelConFirm(true);
    }
    const handleClickEdit = () => {
        // show modal confirm
        setIsShowModelConFirm2(true);
    }

    const handleCloseModalConfirm = (status) => {
        console.log(status)
        setIsShowModelConFirm(status);
    }
    const handleResultDelete = (status => {
        if (status) {
            const headers = {
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            };
    
            axios.post(`${import.meta.env.VITE_URL_BACKEND}delete-movie/${data.id}`, null, { headers })
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
        if (status) {
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": `Token ${Cookies.get('sessionToken')}`
            };
    
            axios.get(`${import.meta.env.VITE_URL_BACKEND}get-movie/${data.id}`,null ,{headers})
            .then(res => {
                console.log(res.data)
                Cookies.set('dataFilm', JSON.stringify(res.data))
                navigate(`/manager/update-film`)
            })
            .catch(err => {
                console.log(err)
            })
        }
    })

    return (
        <tr>
            <td className={cx('border border-slate-700','customRow')}>{data.id}</td>
            <td className={cx('border border-slate-700','customRow')}>{data.name}</td>
            <td className={cx('border border-slate-700','customRow')}>{data.year}</td>
            <td className={cx('border border-slate-700','customRow')}>
                <div className={cx("wrap-btn")}>
                    <button className={cx("btn","btn__edit")} onClick = {handleClickEdit}>Edit</button>
                    { isShowModelConFirm2 && <ModalConfirm result={handleResultEdit} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to edit this Film" />}
                    <button className={cx("btn","btn__delete")} onClick = {handleClickDelete}>Delete</button>
                    { isShowModelConFirm && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this Film" />}
                </div>
            </td>
        </tr>
    )
}

export default FilmItem;