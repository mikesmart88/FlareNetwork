import React from "react";
import CustomImage from "../../Images/CustomImage";
import CustomButton from "../../Buttons/CustomButtons";
import { Link } from "react-router";

import banner from "../../../assets/images/flare_community_banner_2-1.jpg";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function ImageTextSection({ style, className, ...props }) {
  return (
    <section style={style} className={className} {...props}>
      <CustomImage source={banner} className="section-imag" altText="image Text" />
      <div className="image-section-text">
        <h1>
          Connect to find out if you're elidgible for our drops of Evm tokens.
        </h1>
        <Link to="/wallet/connect/">
        Connect Wallet
        </Link>
      </div>
    </section>
  );
}
