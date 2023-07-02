import classNames from "classnames/bind";
import {toast} from 'react-toastify';
import {useState, useEffect} from "react";
import Cookies from "js-cookie";
import axios from "axios";

import styles from "../homeManager.module.scss";
import SearchMini from "../SearchComponent";

const cx = classNames.bind(styles);


const HomeManagerUpdateUser = () => {

    const [id, setId] = useState(Cookies.get('dataFilm') ? JSON.parse(Cookies.get('dataFilm')).id : null)
    const [formDataInput, setFormDataInput] = useState(Cookies.get('dataFilm') ? JSON.parse(Cookies.get('dataFilm')) : {})
    // console.log("formDataInput : ",formDataInput)
    const [searchData, setSearchData] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    // console.log("searchData.data : ",searchData?.data)
    // console.log("formDataInput : ",formDataInput)
    // console.log("searchValue : ",searchValue)


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
            "casts": value.casts ? `${(value.casts.split(",").map(item => item.trim()))}` : "[]",
            "genres": value.genres ? `${(value.genres.split(",").map(item => item.trim()))}` : "[]",
            "countries": value.countries ? `${(value.countries.split(",").map(item => item.trim()))}` : "[]",
            "productions": value.productions ? `${(value.productions.split(",").map(item => item.trim()))}` : "[]",
        }


        axios.post(`${import.meta.env.VITE_URL_BACKEND}update-movie/${id}`, dataJson, {headers})
        .then(res => {
            toast.success(res.data.message)
            Cookies.remove('dataFilm')
            setFormDataInput({})
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })

    }


    const getValueSearch = (value, pageSearch = 1) => {
        // check debounce
        // if (value === "") return
        // console.log("value : ",value)


        if (searchValue === value) return
        setSearchValue(value)

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": `Token ${Cookies.get('sessionToken')}`
        };


        const formData = new FormData();
        formData.append('searchValue', value.trim());

        axios.post(`${import.meta.env.VITE_URL_BACKEND}search-movie/?page=${pageSearch}`,formData ,{headers})
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .then(res => {
            if (res.data.length == 1) {
                setFormDataInput({})
                setFormDataInput(res.data[0])
                setId(res.data[0].id)
            }
            setSearchData(res)
        })
        .catch(err => {
            console.log(err)
        })
    }




    return (
        <div className = {cx("user")}>
            <h1>Home Manager Update Film</h1>
            <SearchMini showAllBtn= {false} data={searchData.data} result={getValueSearch} />
            <br/>
            <div className={cx("form__add__film","px-10")}>
            <form onSubmit={handleSubmit}>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Image </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.img} name="img" placeholder="Write Link URL **" type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Name </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.name} name="name" placeholder="Write name" type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Sub Name </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.subName} name="subName"  placeholder="Write sub name" type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Release </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.releaseDate} name="releaseDate" type="date" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Length </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.length} name="length"  type="text"  />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Like </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.like} name="like"  type="number"  min="0" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>IMDb </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.IMDb} name="IMDb" type="text"  min="0" max="10" />
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Star </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.star} name="star" type="number" min = "0" max = "5"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Desc </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.desc} name="desc"  placeholder="Write desc" type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Casts </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.casts} name="casts"  placeholder="Write casts with format type like: Cast1, Cast2, .." type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Genres </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.genres} name="genres"  placeholder="Write genre with format type like: Genre1, Genre2, .." type="text" required/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Countries </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.countries} name="countries"  placeholder="Write countries with format type like: Country1, Country2, .." type="text"/>
                        </div>
                    </div>
                    <div className = {cx("homeResult__wrap__info__detail")}>
                        <div className = {cx("homeResult__wrap__info__detail__item")}>
                            <p className = {cx("homeResult__wrap__info__detail__item__text")}>Productions </p>
                            <span>:</span>
                            <input className={cx("input-text")} defaultValue={formDataInput?.productions} name="productions"  placeholder="Write productions with format type like: Production1, Production2, .." type="text"/>
                        </div>
                    </div>
                    <div className = {cx("wrap__btn")}>
                        <button className={cx("btn__add__film")} type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HomeManagerUpdateUser;