import classNames from "classnames/bind";

import styles from "./homeProfile.module.scss";

const cx = classNames.bind(styles);

const HomeProfile = () => {
  return (
    <div className={cx("profile", "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2")}>
      <h1>Profile Site</h1>
    </div>
  );
};

export default HomeProfile;
