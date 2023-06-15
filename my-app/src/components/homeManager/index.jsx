import classNames from "classnames/bind";

import styles from "./homeManager.module.scss";

const cx = classNames.bind(styles);

const HomeManager = () => {
  return (
    <div className={cx("manager", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
      <h1>Admin Site</h1>
    </div>
  );
};

export default HomeManager;
