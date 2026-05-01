import React, { useState } from "react";
import CustomImage from "../../Images/CustomImage";
import Icon from "../../Icons/Icon";
import ProductCard from "../../Cards/productCard";

import eye_svg from "../../../assets/images/ftso_lighter.svg";
import state_connect from "../../../assets/images/StateConnector-lighter.svg";
import flare_api from '../../../assets/images/flare_api_icon_6-1.svg';

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function ProductSection({ style, className, ...props }) {
  const [products] = useState([
    {
      icon: <CustomImage source={eye_svg} className="card-img" altText="eye icon for products" />,
      label: "Flare Time Series Oracle",
      description: "Get decentralized, on-chain cryptocurrency price data.",
      buttonLabel: (
        <>
          Documentation <Icon name="LuArrowUpRight" />
        </>
      ),
    },
    {
      icon: <CustomImage source={state_connect} className="card-img" altText="eye icon for products" />,
      label: "State Connector",
      description: "Get decentralized, on-chain information about the state of the other blockchains and the internet.",
      buttonLabel: (
        <>
          Documentation <Icon name="LuArrowUpRight" />
        </>
      ),
    },
    {
      icon: <CustomImage source={flare_api} className="card-img" altText="eye icon for products" />,
      label: "API Portal",
      description: "Access APIs for all networks connected to Flare's data acquisition protocols.",
      buttonLabel: (
        <>
          Documentation <Icon name="LuArrowUpRight" />
        </>
      ),
    },
  ]);

  return (
    <section style={style} className={className} {...props}>
      <h1>Flare Products</h1>
      <p>The native Flare protocols and products available to developers.</p>
      <section className="products-card-section">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={product.icon}
            label={product.label}
            description={product.description}
            buttonlabel={product.buttonLabel}
          />
        ))}
      </section>
    </section>
  );
}
