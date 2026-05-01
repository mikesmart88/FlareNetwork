import React, { useState } from "react";
import CustomImage from "../../Images/CustomImage";
import CustomButton from "../../Buttons/CustomButtons";
import EvmCard from "../../Cards/EvmCard";
import { Link } from "react-router";
import Icon from "../../Icons/Icon";
import StaticVideo from "../../Videos/StaticVideo";
import { NavigateTo } from "../../../utils/LinkNavigate";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function BlockchainSection({ style, className, ...props }) {
  return (
    <section style={style} className={className} {...props}>
      <div className="blockchain-section-text">
        <h1>Unleash the full potential of blockchain</h1>
        <p>
          Use Flare’s decentralized data acquisition protocols and scalable
          EVM-based smart contracts to expand the reach and value of your
          project. Build on Flare with more data than ever before, or build with
          Flare to serve multiple ecosystems.
        </p>
        <div className="blockchain-btn-holder">
          <CustomButton
            className="long-btn"
          >
            Start Building
          </CustomButton>
          <Link to="https://dev.flare.network/">
            Documentation <Icon name="LuArrowUpRight" />{" "}
          </Link>
          <Link to="https://github.com/flare-foundation">
            Github <Icon name="LuArrowUpRight" />{" "}
          </Link>
        </div>
      </div>
      <div className="blockchain-section-vid">
        <StaticVideo
          source="https://ai.flarenetwork-claim.co/wp-content/uploads/FLR_devsquare_3.mp4"
          className="video"
        />
      </div>
    </section>
  );
}
