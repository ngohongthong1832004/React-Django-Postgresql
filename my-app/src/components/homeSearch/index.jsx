import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify';
import Cookies from 'js-cookie';
import axios from "axios";

import styles from "./homeSearch.module.scss";
import ItemFilm from "../itemFilm";
import Pagination from "../pagination";

const cx = classnames.bind(styles);

const HomeSearch = () => {
  const [show, setShow] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('search-movie/');
  
  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);
  let searchValue = params.get('q'); 


  useEffect(() => {
    const formData = new FormData();
    formData.append('searchValue', searchValue);

    axios.post(import.meta.env.VITE_URL_BACKEND + query+ `?page=${page}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + Cookies.get('token')
      }
    })
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [query, page]);


  const getPage = (page) => {
    setPage(page);
  }




  return (
    <div
      className={cx("homeSearch", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}
    >
      <div className={cx("homeSearch__header", "p-1.5")}>
        <div className={cx("homeSearch__header__title")}>
          The result for : <span>{searchValue ? searchValue : "Please enter search value"}</span>{" "}
        </div>
        <div className={cx("homeSearch__header__countItem")}>
          <span>{data?.pagination?.total}</span> {data?.pagination?.total > 1 ? "Movies" : "Movie"}
        </div>
      </div>
      <div className={cx("homeSearch__filter__wrap", "p-1.5")}>
        <div
          className={cx(
            "homeSearch__filter__wrap__item",
            "grid grid-cols-5 gap-5",
          )}
        >
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 0 ? "--active" : ""}`,)} onClick={() =>{ setShow(0); setPage(1) ; setQuery("search-movie/")}}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Name
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 1 ? "--active" : ""}`,)} onClick={() =>{ setShow(1); setPage(1) ; setQuery("search-movie-with-genre/")}}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Genre
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 2 ? "--active" : ""}`,)} onClick={() =>{ setShow(2); setPage(1) ; setQuery("search-movie-with-cast/")}}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Cast
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 3 ? "--active" : ""}`,)} onClick={() =>{ setShow(3); setPage(1) ; setQuery("search-movie-with-country/")}}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Country
            </p>
          </div>
          <div className={cx(`homeSearch__filter__wrap__item__title${show === 4 ? "--active" : ""}`,)} onClick={() => {setShow(4); setPage(1) ; setQuery("search-movie-with-description/")}}>
            <p className={cx("homeSearch__filter__wrap__item__title__text")}>
              Description
            </p>
          </div>
        </div>
      </div>
      <div className={cx("homeSearch__content", "p-1.5")}>
        <div className={cx("homeSearch__content__wrap__item","grid gap-5 grid-cols-3 sm:grid-cols-10",)}>
          {  data?.data?.length > 0 ? data?.data?.map((movie, index) => {

            if (index == 5) {
              return <ItemFilm  key={index} data={movie} className={"col-span-1 sm:col-start-2 sm:col-span-2"}/>
            }
            else {
              return <ItemFilm key={index} data={movie} className={"col-span-1 sm:col-span-2"}/>
            }

          }) : <h2 className={cx("col-span-10", "noMovie", "mt-3")}>Can not find movie</h2> }
        </div>
      </div>
      <Pagination data = {data?.pagination}  result = {getPage}/>
    </div>
  );
};

export default HomeSearch;
