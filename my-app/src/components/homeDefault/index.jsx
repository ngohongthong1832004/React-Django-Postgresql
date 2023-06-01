import classNames from "classnames/bind"

import styles from "./homeDefault.module.scss"

const cx = classNames.bind(styles)


const HomeDefault = () => {
    return (
        <div className={cx("homeDefault__wrap")}>
            <div className={cx("homeDefault__wrap__content")}>
                <div className={cx("homeDefault__wrap__content__title")}>
                    <h1 className={cx("homeDefault__wrap__content__title__text")}>Welcome to my website</h1>
                </div>
            </div>
            <div className={cx("homeDefault__wrap__footer")}>
                <div className={cx("homeDefault__wrap__footer__content")}>
                    <div className={cx("homeDefault__wrap__footer__content__title")}>
                        <h1 className={cx("homeDefault__wrap__footer__content__title__text")}>Footer</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDefault