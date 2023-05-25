import classNames from "classnames/bind";
import styles from "./content.module.scss";
import {  RouterProvider, } from "react-router-dom";

import { router } from "../router";

const cx = classNames.bind(styles);

const Content = () => {
  console.log(router)
  return ( 
    <div className={cx("content")}>
      <RouterProvider router={router}></RouterProvider>
    </div>
    )
  
}

export default Content;