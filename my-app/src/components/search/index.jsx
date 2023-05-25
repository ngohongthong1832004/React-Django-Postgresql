import classnames from "classnames/bind";
import styles from "./search.module.scss";

const cx = classnames.bind(styles);

const Search = function () {
  return (
    <div className={cx("search")}>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
