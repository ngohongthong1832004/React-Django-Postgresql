import classnames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './homeSearch.module.scss'

const cx = classnames.bind(styles)


const HomeSearch = () => {

    const [show, setShow] = useState(0)

    // useEffect(() => {
    //     if (show <= 3) {
    //         setTimeout(() => {
    //             setShow(show + 1)
    //         }, 1000)
    //     }else {
    //         setShow(0)
    //     }
    // }, [show])

    return (
        <div className={cx("homeSearch", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <div className={cx("homeSearch__header", "p-1.5")}>
                <div className={cx("homeSearch__header__title")}>Kết quả tìm kiếm cho : transformer 6 </div>
            </div>
            <div className={cx("homeSearch__filter__wrap", "p-1.5")}>
                <div className={cx("homeSearch__filter__wrap__item", "grid grid-cols-5 gap-5")}>
                    <div className={cx(`homeSearch__filter__wrap__item__title${show === 0 ? "--active" : "--disable"}`)}>
                        <p className={cx("homeSearch__filter__wrap__item__title__text")}>Name</p>
                    </div>
                    <div className={cx(`homeSearch__filter__wrap__item__title${show === 1 ? "--active" : ""}`)}>
                        <p className={cx("homeSearch__filter__wrap__item__title__text")}>Genre</p>
                    </div>
                    <div className={cx(`homeSearch__filter__wrap__item__title${show === 2 ? "--active" : ""}`)}>
                        <p className={cx("homeSearch__filter__wrap__item__title__text")}>Cast</p>
                    </div>
                    <div className={cx(`homeSearch__filter__wrap__item__title${show === 3 ? "--active" : ""}`)}>
                        <p className={cx("homeSearch__filter__wrap__item__title__text")}>Director</p>
                    </div>
                    <div className={cx(`homeSearch__filter__wrap__item__title${show === 3 ? "--active" : ""}`)}>
                        <p className={cx("homeSearch__filter__wrap__item__title__text")}>Your think</p>
                    </div>
                </div>
            </div>
            <div className={cx("homeSearch__content", "p-1.5")}>
                <div className={cx("homeSearch__content__wrap__item","grid grid-cols-5 gap-5")}>
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
        </div>
    )
}

export default HomeSearch