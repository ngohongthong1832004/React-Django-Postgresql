import classNames from "classnames/bind"

import styles from "./homeWishlist.module.scss"

const cx = classNames.bind(styles)


const HomeWishlist = () => {
    return (
        <div className={cx("wishlist", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <h1>My Wishlist</h1>
            <div className={cx("wishlist__wrap__item__filter","grid grid-cols-5 gap-5")}>
                <div className={cx("wishlist__wrap__item__filter__title")}>
                    <p className={cx("wishlist__wrap__item__filter__title__text")}>Wishlist</p>
                </div>
                <div className={cx("wishlist__wrap__item__filter__title")}>
                    <p className={cx("wishlist__wrap__item__filter__title__text")}>Liked</p>
                </div>
            </div>
            <div className={cx("wishlist__wrap__item","grid grid-cols-5 gap-5")}>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
                <div className={cx("item")}></div>
            </div>
        </div>
    )
}

export default HomeWishlist