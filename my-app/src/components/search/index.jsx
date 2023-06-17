import classnames from "classnames/bind";
import  {useEffect, useState, useRef} from "react";


import styles from "./search.module.scss";

const cx = classnames.bind(styles);

const Search = function () {
  const [searchValue, setSearchValue] = useState("");
  const [isSpinner, setIsSpinner] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isShowModalHint, setIsShowModalHint] = useState(false);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length > 0) {
      setIsSpinner(true);
      setIsClose(false);
      setIsShowModalHint(true);
    } else {
      setIsSpinner(false);
      setIsClose(true);
      setIsShowModalHint(false);
    }
  };
  const handleFocus = () => {
    if (searchValue.length > 0) {
      setIsShowModalHint(true);
    }
  }
  const handleBlur = (e) => {
    setTimeout(() => {
      setIsShowModalHint(false);
    }, 300);
  }

  // Check if the searchValue is not changed in 400ms, then close the modal and stop the spinner
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputRef.current !== searchValue) {
      } else {
        setIsClose(true);
        setIsSpinner(false);
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue]);

  useEffect(() => {
    inputRef.current = searchValue;
  }, [searchValue]);
  // end check


  return (
    <div className={cx("search", "container mx-auto p-3")}>
      <h1 className={cx("search__title")}>
        You can write whatever about the film !! name, genre, cast, desc ...
      </h1>
      <div className={cx("relative")} style={{ display: "flex" }} >
        { isShowModalHint && 
          <div className={cx("search__wrap__modal")} id="modal" ref = {modalRef}>
              <a href="/id/1" className={cx("search__modal__wrap__title")}>
                <h3 className={cx("search__modal__title")}>Film 1 ngo hong tong  that la gioi qua di</h3>
              </a>
              <a href="/id/2" className={cx("search__modal__wrap__title")}>
                <h3 className={cx("search__modal__title")}>Film 2</h3>
              </a>
              <a href="/id/3" className={cx("search__modal__wrap__title")}>
                <h3 className={cx("search__modal__title")}>Film 3</h3>
              </a>
              <a href="/id/4" className={cx("search__modal__wrap__title")}>
                <h3 className={cx("search__modal__title")}>Film 4</h3>
              </a>
              <a href="/id/5" className={cx("search__modal__wrap__title")}>
                <h3 className={cx("search__modal__title")}>Film 5</h3>
              </a>
          </div>
        }
        <>
          <form action="/search">
            <div className={cx("search__wrap__input")}>
              <input
                className={cx("search__input")}
                ref = {inputRef}
                onChange={handleChangeSearchValue}
                onFocus={handleFocus}
                onBlur={(e)=> handleBlur(e)}
                value={searchValue}
                name="q"
                type="text"
                placeholder="Search some things ..."
                autoComplete="off"
              />
              <div className={cx("search__input__wrap__option__btn")}>
                  { searchValue.length > 0 && isClose && <div className={cx("search__option__btn__close")} onClick={() => setSearchValue("")}>
                    <i className="fas fa-times"></i>
                  </div>}
                
                  { isSpinner && <div className={cx("search__option__btn__spinner")}>
                    <i className="fas fa-spinner"></i>
                  </div> }
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
