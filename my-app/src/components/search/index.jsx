import classnames from "classnames/bind";
import styles from "./search.module.scss";

const cx = classnames.bind(styles);

const Search = function () {
  return (
    <div className={cx("search", "container mx-auto p-3")}>
      <h1 className={cx("search__title")}>
        You can write whatever about the film !! name, genre, cast, desc ...
      </h1>
      <div style={{ display: "flex" }}>
        <>
          <form action="/search">
            <div className={cx("search__wrap__input")}>
              <input
                className={cx("search__input")}
                name="q"
                type="text"
                placeholder="Search some things ..."
                autoComplete="off"
              />
              <div className={cx("search__input__wrap__option__btn")}>
                <div className={cx("search__option__btn__spinner")}>
                  <i className="fas fa-spinner"></i>
                </div>
                {/* <div className={cx("search__option__btn__close")}>
                  <i className="fas fa-times"></i>
                </div> */}
              </div>
              <button className={cx("search__btn")}>
                <div>
                  <i className="fas fa-search"></i>
                </div>
              </button>
            </div>
          </form>
        </>
        <div className={cx("search__wrap__voice")}>
          <button className={cx("search__voice__btn")}>
            <i className="fas fa-microphone"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
