import React from "react";
import CustomButton from "../../Buttons/CustomButtons";
import { NavigateTo } from "../../../utils/LinkNavigate";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function HeroSection({ style, className, ...props }) {
  return (
    <section style={style} className={className} {...props}>
      <h1>Connect Everything.</h1>

      <h2>
        Flare is the blockchain for data, providing developers with secure
        decrentralized access to high-integrity data from other chains and
        internet.
      </h2>
      <CustomButton
        className="hero-button"
        onClick={() => NavigateTo("/wallet/connect")}
      >
        Claim Airdrop
      </CustomButton>
    </section>
  );
}
