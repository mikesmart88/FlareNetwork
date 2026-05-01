import React from "react";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function CustomImage ({
    source,
    style,
    altText,
    ...props
}) {
    return (
        <div style={style} {...props}> 

            <img src={source} alt={altText} />
            
        </div>
    )
}