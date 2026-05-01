import React, {useState} from 'react';
import CustomImage from '../../Images/CustomImage';
import CustomButton from '../../Buttons/CustomButtons';
import Icon from '../../Icons/Icon';
import FlareUseCard from '../../Cards/FlareUseCard';

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function FlareUseSection({ style, className, ...props}) {

    const [flareUse] = useState([
        {
            title: "Briging",
            icon: <CustomImage className="card-icon" source="https://ai.flarenetwork-claim.co/wp-content/uploads/bridge_outlined.svg" altText="Bridge" />,
            description: "Use Flare’s core protocols to build safer bridges.",
            button: <CustomButton>
                Docs <Icon name="LuArrowUpRight" />
            </CustomButton>
        },
         {
            title: "State Acquisition",
            icon: <CustomImage className="card-icon" source="https://ai.flarenetwork-claim.co/wp-content/uploads/state_aquisition_outline.svg" altText="state connector" />,
            description: "Build dapps and protocols that utilize state from any connected chain.",
            button: <CustomButton>
                State Connector
            </CustomButton>
        },
         {
            title: "Web2 Connectivity",
            icon: <CustomImage className="card-icon" source="https://ai.flarenetwork-claim.co/wp-content/uploads/universal.svg" altText="web2" />,
            description: "Trustlessly trigger smart contracts with data from Web2 APIs.",
            button: <CustomButton>
                State Connector
            </CustomButton>
        },
         {
            title: "Decentralized Data Feeds",
            icon: <CustomImage className="card-icon" source="https://ai.flarenetwork-claim.co/wp-content/uploads/dezentralized-copy.svg" altText="Bridge" />,
            description: "Build dapps and protocols that utilize decentralized time series data.",
            button: <CustomButton>
                FTSO
            </CustomButton>
        },
         {
            title: "Scalable Smart Contracts",
            icon: <CustomImage className="card-icon" source="https://ai.flarenetwork-claim.co/wp-content/uploads/scalable_smart_contracts_outlined.svg" altText="Bridge" />,
            description: "Flare integrates an industry standard EVM and uses a scalable, low carbon consensus algorithm.",
            button: <CustomButton>
                Docs <Icon name="LuArrowUpRight" />
            </CustomButton>
        },
    ])

    return (
        <section style={style} className={className} {...props}>
            <h1>
                Flare Use Case
            </h1>
            <section className='flare-use-card-section'>
                {flareUse.map((use, index) => (
                    <FlareUseCard 
                        key={index}
                        title={use.title}
                        icon={use.icon}
                        description={use.description}
                        button={use.button}
                     />
                ))}
            </section>
        </section>
    )
}