import classnames from "classnames/bind"

import styles from "./skeleton.module.scss"


const cx = classnames.bind(styles)

const SkeletonText = ({tagName = "div", className = ""}) => {

    const TagName = tagName

    const classes = cx('skeleton-text', {
            [className]:className,
        }
    );

    return (
        <TagName className={classes}></TagName>
    )
}

export default SkeletonText