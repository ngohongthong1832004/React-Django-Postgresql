import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './skeleton.module.scss';


const cx = classnames.bind(styles);

const SkeletonFive = () => {

    const [show, setShow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow((show) => (show + 1) % 5);
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx("grid grid-cols-6 gap-5 sm:grid-cols-5")}>
            <div className={cx(`skeleton__item${show === 0 ? "--active" : ""}`,"col-span-2 sm:col-span-1")}></div>
            <div className={cx(`skeleton__item${show === 1 ? "--active" : ""}`,"col-span-2 sm:col-span-1")}></div>
            <div className={cx(`skeleton__item${show === 2 ? "--active" : ""}`,"col-span-2 sm:col-span-1")}></div>
            <div className={cx(`skeleton__item${show === 3 ? "--active" : ""}`,"col-span-2 col-start-2 sm:col-span-1")}></div>
            <div className={cx(`skeleton__item${show === 4 ? "--active" : ""}`,"col-span-2 sm:col-span-1")}></div>
        </div>

    );
}

export default SkeletonFive;