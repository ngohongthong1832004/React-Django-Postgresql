import styles from './header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Header = () => {
    return (
        <div className={cx("header", "grid grid-cols-3 gap-3")}>
            <div className={cx('header__sidebar')}>
                <p>SIDEBAR</p>
            </div>
            <div className={cx("header__title")}>
                <p>HEADER</p>
            </div>
            <div className={cx('header__user')}>
                <p>USER</p>
            </div>
        </div>
    )
}

export  default Header;


