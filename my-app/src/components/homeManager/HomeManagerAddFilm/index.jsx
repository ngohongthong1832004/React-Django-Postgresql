import classNames from "classnames/bind";
import axios from "axios";
import Cookies from "js-cookie";
import {toast } from 'react-toastify';

import styles from "../homeManager.module.scss";

const cx = classNames.bind(styles);


const HomeManagerAddUser = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)
        const value = Object.fromEntries(data.entries())

        // console.log(value.releaseDate)

        const headers = {
            "Authorization": `Token ${Cookies.get('sessionToken')}`,
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
          };
    
        const dataJson = {
            "img": `${value.img || "null"}`,
            "name": `${value.name || "null"}`,
            "subName": `${value.subName || "null"}`,
            "releaseDate": `${value.releaseDate || "Premiere soon"}`,
            "year": `${value.releaseDate.slice(0,4) || "Premiere soon"}`,
            "length": `${value.length ? value.length + "m"  : "null"}`,
            "like": value.like || 0,
            "IMDb": value.IMDb || 0,
            "star": value.star || 0,
            "desc": `${value.desc || "null"}`,
            "casts": value.casts ? value.casts : "null",
            "genres": value.genres ? value.genres : "null",
            "countries": value.countries ? value.countries : "null",
            "productions": value.productions ? value.productions : "null",
        }

        axios.post(`${import.meta.env.VITE_URL_BACKEND}add-movie/`, dataJson, {headers})
        .then(res => {
            toast.success(res.data.message)
            event.target.reset()
        })
        .catch(err => {
            console.log(err)
        })

    }


    return (
        <div className = {cx("user")}>
            <h1>Home Manager Add Film</h1>
            <div className={cx("form__add__film","px-10")}>
                <form onSubmit={handleSubmit}>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Image </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="img" placeholder="Write Link URL **" type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Name </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="name" placeholder="Write name" type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Sub Name </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="subName"  placeholder="Write sub name" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Release </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="releaseDate" type="date" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Length </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="length" defaultValue={90} type="number"  min="1" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Like </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="like" defaultValue={0} type="number"  min="0" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>IMDb </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="IMDb" defaultValue={0} type="text"  min="0" max="10" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Star </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="star" defaultValue={0} type="number" min = "0" max = "5"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Desc </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="desc"  placeholder="Write desc" type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Casts </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="casts"  placeholder="Write casts with format type like: Cast1, Cast2, .." type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Genres </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="genres"  placeholder="Write genre with format type like: Genre1, Genre2, .." type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Countries </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="countries"  placeholder="Write countries with format type like: Country1, Country2, .." type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Productions </p>
                            <span>:</span>
                            <input className={cx("input-text")} name="productions"  placeholder="Write productions with format type like: Production1, Production2, .." type="text"/>
                        </div>
                    </div>
                    <div className = {cx("wrap__btn")}>
                        <button className={cx("btn__add__film")} type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HomeManagerAddUser;