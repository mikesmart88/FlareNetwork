import React from 'react';

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function GetStartedCards({
    label,
    icon,
    description,
    disabled = false,
    style,
    className,
    ...props
}) {

    return (
        <div style={style} className={`card ${className} ${disabled ? "disabled" : ''}`} {...props}>
            <h1>
                {label}
            </h1>
            <p>
                {description}
            </p>
            {icon}
        </div>
    )

}