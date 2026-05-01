import React from 'react';
import CustomImage from '../Images/CustomImage';

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function ConnectCard({style, className, imgsrc, label, sitelink, ...props})  {
    return (
        <div style={style} className={`card ${className}`} {...props}>
            <CustomImage className="img" source={imgsrc} altText="wallet image" />
            <div>
                <h1>
                    {label}
                </h1>
                <p>{sitelink}</p>
            </div>
            <div className="verified-badge">✓</div>
        </div>
    )
}