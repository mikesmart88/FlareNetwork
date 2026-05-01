import React from 'react';
import CustomButton from '../Buttons/CustomButtons';

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function ProductCard({
    icon,
    label,
    description,
    buttonlabel,
    style,
    className,
    ...props
}) {    
    return (
        <div style={style} className={`card ${className}`} {...props}>
            {icon}
            <h1>{label}</h1>
            <p>
                {description}
            </p>
            <CustomButton >
                {buttonlabel}
            </CustomButton>
        </div>
    )
}