import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './skeleton.module.scss';


const cx = classnames.bind(styles);

const Skeleton = () => {

    const [show, setShow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow((show) => (show + 1) % 9);
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx("grid gap-5 grid-cols-6 sm:grid-cols-10")}>
            <div className={cx(`skeleton__item${show === 0 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 1 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 2 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 3 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 4 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 5 ? "--active" : ""}`,"col-span-2 sm:col-start-2")}></div>
            <div className={cx(`skeleton__item${show === 6 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 7 ? "--active" : ""}`,"col-span-2")}></div>
            <div className={cx(`skeleton__item${show === 8 ? "--active" : ""}`,"col-span-2")}></div>
        </div>

    );
}

export default Skeleton;