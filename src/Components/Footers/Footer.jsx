import React from "react";
import { Link } from "react-router";
import CustomImage from "../Images/CustomImage";
import CustomButton from "../Buttons/CustomButtons";
import Icon from "../Icons/Icon";

import flare_svg from "../../assets/images/flare-logo.svg";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function ({ style, className, ...props }) {
  return (
    <footer style={style} className={`footer ${className}`} {...props}>
      <nav>
        <div>
          <Link className="footer-logo">
            <CustomImage
              source="https://ai.flarenetwork-claim.co/wp-content/uploads/footer_logo_light.svg"
              altText="flare white image logo"
            />
          </Link>
          <p>
            <Icon name="LuCopyright" /> Flare Network 2023
          </p>
        </div>
        <div className="icon-div">
          <Link>
            <Icon name="LuTwitter" />
          </Link>
          <Link>
            <Icon name="BsTelegram" />
          </Link>
          <Link>
            <Icon name="BsYoutube" />
          </Link>
          <Link>
            <Icon name="BsInstagram" />
          </Link>
          <Link>
            <Icon name="LuLinkedin" />
          </Link>
          <Link>
            <Icon name="LuGithub" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
