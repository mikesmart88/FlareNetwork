import React, {useState} from "react";
import CustomButton from "../../Buttons/CustomButtons";
import Icon from "../../Icons/Icon";
import CustomImage from "../../Images/CustomImage";
import GetStartedCards from "../../Cards/GetStartedCard";

import product_svg from '../../../assets/images/products.svg'
import blockchain_svg from '../../../assets/images/blockchain.svg'
import open_source_svg from '../../../assets/images/flare_open_source.svg'
import bug_bounty_svg from '../../../assets/images/bug_bounty-1.svg'
import grant_program_svg from '../../../assets/images/grants_program-1.svg'

import { NavigateTo } from "../../../utils/LinkNavigate";

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns
 */

export default function GetStartedSection({ style, className, ...props }) {
  const [cards] = useState([
    {
      label: "Products",
      icon: <CustomImage source={product_svg} className="card-icon" alt="Products" />,
      description: "The Flare protocols, how they work and what they can do."
    },
    {
      label: "Flare Blockchains",
      icon: <CustomImage source={blockchain_svg} className="card-icon" alt="Flare Blockchains" />,
      description: "When to use Flare, songbird and Custon.",
      disabled: true
    },
    {
      label: "Open Source",
      icon: <CustomImage source={open_source_svg} className="card-icon" alt="Open Source" />,
      description: "Our source code repositories."
    },
    {
      label: "Bug Bounty",
      icon: <CustomImage source={bug_bounty_svg} className="card-icon" alt="Bug Bounty" />,
      description: "Support the safety of the Flare network."
    },
    {
      label: "Grant Program",
      icon: <CustomImage source={grant_program_svg} className="card-icon" alt="Grant Program" />,
      description: "Apply for funding to develop on or using Flare."
    }
  ]);

  return (
    <section style={style} className={className} {...props}>
      <h1>Getting Started</h1>
      <p>
        Flare is a layer 1 EVM-based blockchain that has 2 core data acquisition
        protocols, the State Connector and Flare Time Series Oracle (FTSO).
      </p>
      <CustomButton onClick={() => NavigateTo("https://dev.flare.network/")} >
        Read the technical documentation <Icon name="LuArrowUpRight" />
      </CustomButton>

      <section className="card-section">
        {cards.map((card, index) => (
            <GetStartedCards key={index} label={card.label} description={card.description} icon={card.icon} className="get-started-card" />
        ))}
      </section>

    </section>
  );
}
