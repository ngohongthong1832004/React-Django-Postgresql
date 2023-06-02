import classNames from "classnames/bind"

import styles from "./homeDefault.module.scss"

const cx = classNames.bind(styles)


const HomeDefault = () => {
    return (
        <div className={cx("homeDefault__wrap", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
            <div className={cx("homeDefault__wrap__content")}>
                <div className={cx("homeDefault__wrap__content__title")}>
                    <h1 className={cx("homeDefault__wrap__content__title__text")}>Welcome to my website</h1>
                </div>
            </div>
            <div className={cx("homeDefault__wrap__footer")}>
                <div className={cx("homeDefault__wrap__footer__content")}>
                    <div className={cx("homeDefault__wrap__footer__content__contact")}>
                        <h1 className={cx("homeDefault__wrap__footer__content__title__text")}>Contact with us</h1>
                    </div>
                    <div className={cx("homeDefault__wrap__footer__content__contact__content", "grid grid-cols-5 gap-5")}>
                        <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
                            <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text")}>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title")}> 
                                    <label className = {cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon")}> 
                                        <i className={cx("fas fa-map-marker-alt")}></i>
                                    </label>
                                    Address
                                </p>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__content")}>Can Tho City Viet Nam</p>
                            </div>
                        </div>
                        <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
                         
                            <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text")}>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title")}> 
                                    <label className = {cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon")}>
                                        <i className={cx("fa-brands fa-facebook-f")} />
                                    </label>
                                    Facebook
                                </p>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__content")}>Bap Pine</p>
                            </div>
                        </div>
                        <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
                         
                            <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text")}>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title")}>
                                    <label className = {cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon")}>
                                        <i className={cx("fa-brands fa-github")} />
                                    </label>
                                    Githup
                                </p>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__content")}>ngohongthong18032004</p>
                            </div>
                        </div>                   

                        <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
                           
                            <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text")}>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title")}>
                                    <label className = {cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon")}>
                                        <i className={cx("fas fa-phone-alt")}></i>
                                    </label>
                                    Phone
                                </p>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__content")}>+84 345223056</p>
                            </div>
                        </div>
                        <div className={cx("homeDefault__wrap__footer__content__contact__content__item")}>
                          
                            <div className={cx("homeDefault__wrap__footer__content__contact__content__item__text")}>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__title")}>
                                    <label className = {cx("homeDefault__wrap__footer__content__contact__content__item__text__title__icon")}>
                                        <i className={cx("fas fa-envelope")}></i>
                                    </label>
                                    Email
                                </p>
                                <p className={cx("homeDefault__wrap__footer__content__contact__content__item__text__content")}>baphongpine@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDefault