import classnames from "classnames/bind"


import styles from "./pagination.module.scss"

const cx = classnames.bind(styles)



const Pagination = ({
    data = {} ,
    result = () => {},
    className = ""
    }) => {


    const classes = cx("pagination","p-1.5", className) 

    const paginationArr = function (maxPage, eachSide, page) {
        let start;
        let end;
        if ( maxPage < 3 ) {
            start = 1;
            end = maxPage;
        } else if (page <= eachSide) {
            start = 1;
            end = eachSide + 1;
        } else if (page >= maxPage - eachSide + 2) {
            start = maxPage - eachSide;
            end = maxPage;
        } else {
            start = page - eachSide + 1;
            end = page + eachSide - 1;
        }
        const arr = [];
        if (start > 1) {
            arr.push(1);
        }
        if (start > 2) {
            arr.push("...");
        }
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        if (end < maxPage - 1) {
            arr.push("...");
        }
        if (end < maxPage) {
            arr.push(maxPage);
        }

        return arr;
    };



    return (
        <div className={classes}>
           { paginationArr(data.max_page, 2, data.current_page).length > 0 && <div className={cx("pagination__wrap")}>
                { data.previous_page && <div className={cx("pagination__wrap__item")} onClick ={() => {result(data.current_page - 1)}} >
                    <div className={cx("pagination__wrap__item__text")}><i className={cx("fas fa-chevron-left")}></i></div>
                </div>}
                { paginationArr(data.max_page, 2, data.current_page).map((item, index) => {
                    if (item === "...") {
                        return (
                            <div key = {index} className={cx("pagination__wrap__item")} onClick ={() => {result("null")}} >
                                <div className={cx("pagination__wrap__item__text")}>..</div>
                            </div>
                        )
                    } else {
                        if (item === data.current_page) {
                            return (
                                <div key = {index} className={cx("pagination__wrap__item", "active")} onClick ={() => {result(item)}} >
                                    <div className={cx("pagination__wrap__item__text")}>{item}</div>
                                </div>
                            )
                        }
                        return (
                            <div key = {index} className={cx("pagination__wrap__item")} onClick ={() => {result(item)}} >
                                <div className={cx("pagination__wrap__item__text")}>{item}</div>
                            </div>
                        )
                    }
                    })
                 }
               {data.next_page && <div className={cx("pagination__wrap__item")} onClick ={() => {result(data.current_page + 1)}} >
                    <div className={cx("pagination__wrap__item__text")}><i className={cx("fas fa-chevron-right")}></i></div>
                </div>}
            </div>}
        </div>
    )
}
export default Pagination;