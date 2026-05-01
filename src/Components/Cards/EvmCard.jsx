import React from 'react';

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function EvmCard({
    icon,
    label,
    label2,
    description,
    style,
    className,
    children,
    disabled = false,
    ...props
}) {
    return (
        <div style={style} className={`card ${className} ${disabled ? "disabled" : ''} `} >
            {icon}
            <h1>
                {label}
            </h1>
            <h1>{label2}</h1>
            <p>
                {description}
            </p>
                {children}
        </div>
    )
}