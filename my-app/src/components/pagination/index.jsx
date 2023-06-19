import classnames from "classnames/bind"


import styles from "./pagination.module.scss"

const cx = classnames.bind(styles)



const Pagination = ({
    data = [] ,
    result = () => {},
    className = ""
    }) => {


    const classes = cx("pagination","p-1.5", className) 

    return (
        <div className={classes}>
            <div className={cx("pagination__wrap")}>
                <div className={cx("pagination__wrap__item")} onClick ={() => {result()}} >
                    <div className={cx("pagination__wrap__item__text")}><i className={cx("fas fa-chevron-left")}></i></div>
                </div>
                <div className={cx("pagination__wrap__item", "active" )} onClick ={() => {result(1)}} >
                    <div className={cx("pagination__wrap__item__text")}>1</div>
                </div>
                <div className={cx("pagination__wrap__item")} onClick ={() => {result(2)}} >
                    <div className={cx("pagination__wrap__item__text")}>2</div>
                </div>
                <div className={cx("pagination__wrap__item")} onClick ={() => {result(null)}} >
                    <div className={cx("pagination__wrap__item__text")}>..</div>
                </div>
                <div className={cx("pagination__wrap__item")} onClick ={() => {result(100)}} >
                    <div className={cx("pagination__wrap__item__text")}>100</div>
                </div>
                <div className={cx("pagination__wrap__item")} onClick ={() => {result()}} >
                    <div className={cx("pagination__wrap__item__text")}><i className={cx("fas fa-chevron-right")}></i></div>
                </div>
            </div>
        </div>
    )
}
export default Pagination;