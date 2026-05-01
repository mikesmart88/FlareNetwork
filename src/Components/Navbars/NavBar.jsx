import React, { useState } from "react"
import { Link } from "react-router"
import CustomImage from "../Images/CustomImage"
import CustomButton from "../Buttons/CustomButtons"
import { NavigateTo } from "../../utils/LinkNavigate"
import Icon from "../Icons/Icon"
import SideBar from "../SideBars/SideBars"

import flare_svg from '../../assets/images/flare-logo.svg'

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function NavBar({
    style,
    className,
    ...props
}) {

    const [visible, setVisible] = useState(false)

    const toggleSidebar = () => {
        if (visible == true) {
            setVisible(false)
        }
        else{
            setVisible(true)
        }
    }
    return (
        <>
        <header style={style} className={className} {...props}>
            <nav>
                <Link to="/">
                <CustomImage source={flare_svg} altText="flare svg logo" className="navbar-logo" />
                </Link>

                <div className="nav-btn-holder">
                    <CustomButton className="navbar-button" onClick={() => NavigateTo("/wallet/connect/")}>
                        Connect Wallet
                    </CustomButton>
                </div>
                 <span className="menu-btn" onClick={() => toggleSidebar()}>
                       {visible ? ( <Icon name="IoClose" />) : ( <Icon name="LuMenu" />)}
                    </span>
            </nav>
        </header>
        <SideBar className={`sidebar ${visible ? "show-pop" : "close-pop"}`} />
        </>
    )
}