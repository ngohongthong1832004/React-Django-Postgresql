import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';
import axios from 'axios'

import styles from "./homeWishlist.module.scss";
import ItemFilm from "../itemFilm";
import Pagination from "../pagination";
import Skeleton from "../skeleton";
import SkeletonFive from "../skeleton/skeletonFive";

const cx = classNames.bind(styles);

const HomeWishlist = () => {
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

  const [show, setShow] = useState(0); // 0: wishlist, 1: like
  const countLikeMovies= (Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')).countWishlist : 0);
  const countFollowMovies= ( Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')).countLike : 0);
  const [query, setQuery] = useState("get-movie-wishlist-like/");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]); // [0] : wishlist, [1] : like
  const [isSkeleton, setIsSkeleton] = useState(false);

  const navigate = useNavigate();
  const isUser = Cookies.get('sessionToken');

  useEffect(() => {
    const option = {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Token ${Cookies.get('sessionToken')}`
        }
    }
      axios.get(import.meta.env.VITE_URL_BACKEND + query + `?page=${page}`, option)
      .then(res => {
        setData(res.data)
        setIsSkeleton(true)
      })
      .catch((err) => {
          console.log(err)
      })
  },[page, query])

  const getPage = (page) => {
    setPage(page);
  }


 


  return (
    <div className={cx("wishlist", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
     { isUser && <>
        <h1>My Wishlist</h1>
      
        <div className={cx("wishlist__wrap__item__filter", "grid gap-5 grid-cols-2 sm:grid-cols-5","mb-4")}>
          <div className={cx(`wishlist__wrap__item__filter__title${show === 0 ? "--active" : ""}`,)} onClick={() => {setShow(0); setPage(1); if (show != 0) setIsSkeleton(false) ; setQuery("get-movie-wishlist-like/")}}>
            <p className={cx("wishlist__wrap__item__filter__title__text")}>
             {countFollowMovies > 0 && <span>{countFollowMovies}</span>}
               Like
              <i className={cx("fas fa-heart", "pl-2")}></i>

            </p>
          </div>
          <div className={cx(`wishlist__wrap__item__filter__title${show === 1 ? "--active" : ""}`,)} onClick={() => {setShow(1); setPage(1); if (show != 1) setIsSkeleton(false) ; setQuery("get-movie-wishlist-follow/")}}>
            <p className={cx("wishlist__wrap__item__filter__title__text")}>
              { countLikeMovies > 0 && <span>{countLikeMovies} </span> }
              Follow
              <i className={cx("fas fa-music", "pl-2")}></i>
            </p>
          </div>
        </div>
        {  isSkeleton ? <div className={cx("wishlist__wrap__item", "grid gap-5 grid-cols-6 sm:grid-cols-10")}>
        {  data?.data?.length > 0 ? data?.data?.map((movie, index) => {

          if (index == 5) {
            return <ItemFilm  key={index} data={movie}  className={"col-span-2 sm:col-start-2 sm:col-span-2"} />
          }
          else {
            return <ItemFilm key={index} data={movie} className={"col-span-2 sm:col-span-2"}/>
          }

          }) : <h2 className={cx("col-span-10", "noMovie", "mt-3")}>You don't have movie</h2> }
        </div> :   <Skeleton /> }
        <Pagination data = {data?.pagination}  result = {getPage}/>
      </>}
    </div>
  );
};

export default HomeWishlist;
