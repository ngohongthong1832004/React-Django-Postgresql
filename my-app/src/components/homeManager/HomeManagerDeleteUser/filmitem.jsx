import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "../homeManager.module.scss";
import ModalConfirm from "../../modalConfirm";

const cx = classNames.bind(styles);

const FilmItem = ({data = []}) => {

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
            toast.success('Delete Film success');
        }
    })

    return (
        <tr>
            <td className={cx('border border-slate-700','customRow')}>1</td>
            <td className={cx('border border-slate-700','customRow')}>Transformer: Rise of the beast</td>
            <td className={cx('border border-slate-700','customRow')}>2018</td>
            <td className={cx('border border-slate-700','customRow')}>American</td>
            <td className={cx('border border-slate-700','customRow')}>
                <div className={cx("wrap-btn")}>
                    <button className={cx("btn","btn__edit")}>Edit</button>
                    <button className={cx("btn","btn__delete")} onClick = {handleClickDelete}>Delete</button>
                    { isShowModelConFirm && <ModalConfirm result={handleResultDelete} callBack={handleCloseModalConfirm} isFormOrConfirm= {false} titleModal={"Confirm"} textConfirm="Are you sure to delete this Film" />}
                </div>
            </td>
        </tr>
    )
}

export default FilmItem;