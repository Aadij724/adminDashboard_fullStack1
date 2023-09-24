import "../widget/Widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { colors } from "@mui/material";

const Widget = ({type}) => {
    let data;

    //temporary data
    const amt = 100;
    const per = 20;

    switch(type) {
        case "users":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlinedIcon 
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)"
                        }}     
                    />)
            };
            break;
        case "orders":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <Inventory2OutlinedIcon 
                        className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218, 165, 32, 0.2)"
                        }}
                    />)
            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <LocalAtmOutlinedIcon 
                        className="icon"
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0, 128, 0, 0.2"
                        }}
                    />
                )
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon 
                        className="icon" 
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128, 0, 128, 0.2)"
                        }}
                    />
                ) 
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="wrapper">
                <div className="left">
                    <div className="users">{data.title}</div>
                    <div className="counter">{data.isMoney && "$"} {amt}</div>
                    <div className="link">{data.link}</div>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpOutlinedIcon className="icon"/>
                        <span>{per} %</span>
                    </div>
                    <div className="logo">
                        {data.icon}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget;