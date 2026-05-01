import React from "react";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function FlareUseCard({ style, className, title, icon, description, button, ...props }) {
  return (
    <div style={style} className={`card ${className}`} {...props}>
        <h1>
            {title}
        </h1>
        {icon}
        <p>
            {description}
        </p>
        {button}
    </div>
  );
}
