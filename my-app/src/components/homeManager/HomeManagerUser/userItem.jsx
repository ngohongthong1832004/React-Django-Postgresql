import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "../homeManager.module.scss";
import ModalConfirm from "../../modalConfirm";

const cx = classNames.bind(styles);

const UserItem = ({data = []}) => {

    const [isShowModelConFirm, setIsShowModelConFirm] = useState(false);

    const handleClickDelete = () => {
        // show modal confirm
        setIsShowModelConFirm(true);
    }

    const handleCloseModalConfirm = (status) => {
        setIsShowModelConFirm(status);
    }
    const handleResultDelete = (status => {
        if (status) {
            toast.success('Delete user success');
        }
    })

    return (
        <tr>
            <td className={cx('border border-slate-700','customRow')}>1</td>
            <td className={cx('border border-slate-700','customRow')}>admin</td>
            <td className={cx('border border-slate-700','customRow')}>admin@gmail.com</td>
            <td className={cx('border border-slate-700','customRow')}>
                <i className={cx("fas fa-times","text-green-500")}></i>
            </td>
            <td className={cx('border border-slate-700','customRow')}>
                <div className={cx("wrap-btn")}>
                    <button className={cx("btn","btn__edit")}>Edit</button>
                    <button className={cx("btn","btn__delete")} onClick = {handleClickDelete}>Delete</button>
                    { isShowModelConFirm && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this user" />}
                </div>
            </td>
        </tr>
    )
}

export default UserItem;