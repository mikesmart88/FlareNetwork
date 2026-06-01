import React, { useState } from "react";
import CustomImage from "../../Images/CustomImage";
import CustomButton from "../../Buttons/CustomButtons";
import EvmCard from "../../Cards/EvmCard";
import { NavigateTo } from "../../../utils/LinkNavigate";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

import eye_svg from "../../../assets/images/ftso_lighter.svg";
import state_connect from "../../../assets/images/StateConnector-lighter.svg";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function EvmSection({ style, className, ...props }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [evmCard] = useState([
    {
      icon: <CustomImage source={eye_svg} className="evm-icon" />,
      label: "Claim Free Flare Drop",
      label2: "EVM tokens for Free",
      description:
        "We would be rewarding users with some EVM tokens for free. Please note that only those that qualify would recieve the Airdrop.",
      children: (
        <div className="evm-button-holder">
          <CustomButton
            className="evm-buttons btn1"
            style={{ background: "#fff", border: "1px solid #242425" }}
          >
            Check Status
          </CustomButton>
          <CustomButton
            className="evm-buttons btn2"
            style={{
              background: "transparent",
              border: "2px solid #fff",
              color: "#fff",
            }}
            onClick={() => NavigateTo("/wallet/connect")}
          >
            Claim Airdrop
          </CustomButton>
        </div>
      ),
    },
    {
      icon: <CustomImage source={state_connect} className="evm-icon" />,
      label: "State Connector",
      label2: "Trustless event data",
      description:
        "The State Connector enables information from other blockchains and the internet to be used securely and trustlessly with smart contracts on Flare.",
      children: (
        <div className="evm-button-holder">
          <CustomButton
            className="evm-buttons btn1"
            style={{ background: "#fff", border: "1px solid #242425" }}
          >
            Build
          </CustomButton>
          <CustomButton
            className="evm-buttons btn2"
            style={{
              background: "transparent",
              border: "2px solid #fff",
              color: "#fff",
            }}
          >
            Learn More
          </CustomButton>
        </div>
      ),
    },
  ]);

  return (
    <section
      ref={ref}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transition: "0.6s",
        transitionDelay: "0.2s",
      }}
      className={className}
      {...props}
    >
      <h1>
        ENM-based layer 1 blockchain with two native data acquisition protocals
      </h1>
      <section className="evm-card-section">
        {evmCard.map((card, index) => (
          <EvmCard
            key={index}
            icon={card.icon}
            label={card.label}
            label2={card.label2}
            description={card.description}
            children={card.children}
            className="evm-card"
          />
        ))}
      </section>
    </section>
  );
}
