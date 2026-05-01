import React from "react"
import { Link } from "react-router"
import CustomButton from "../Buttons/CustomButtons"
import { NavigateTo } from "../../utils/LinkNavigate"
import Icon from "../Icons/Icon"

import flare_svg from '../../assets/images/flare-logo.svg'

/**
 * @param {object} props
 * @param {React.CSSProperties} [props.style]
 * @returns 
 */

export default function SideBar({style, className, ...props}) {
    return (
        <aside style={style} className={className} {...props}>
            <CustomButton onClick={() => NavigateTo("/wallet/connect/")}>
                Connect Wallet
            </CustomButton>
        </aside>
    )
}