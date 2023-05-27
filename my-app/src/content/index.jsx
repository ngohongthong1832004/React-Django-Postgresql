import classNames from "classnames/bind";
import styles from "./content.module.scss";
import {  RouterProvider, } from "react-router-dom";

import { router } from "../router";

const cx = classNames.bind(styles);

const Content = () => {
  return ( 
    <div className={cx("content", "container mx-auto pt-5")}>
      <RouterProvider router={router}></RouterProvider>
    </div>
    )
  
}

export default Content;