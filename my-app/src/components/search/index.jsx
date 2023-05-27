import classnames from "classnames/bind";
import styles from "./search.module.scss";

const cx = classnames.bind(styles);

const Search = function () {
  return (
    <div className={cx("search","container mx-auto p-4")}>
      <input type="text" placeholder="Search" />
      <button> Search </button>
    </div>
  );
};

export default Search;
