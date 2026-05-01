import React from "react";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function StaticVideo({
    source,
    style,
    className,
    ...props
}) {
    return (
        <video src={source} style={style} className={className} {...props} controls={false} autoPlay loop muted>
            Your browser does not support the video tag.
        </video>
    )
}