import "../navbar/Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import DarkThemeContext from "../../context/darkTheme/darkThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import {ACTIONS} from "../../reducer/themeReducer";

const Navbar = () => {

    const {darkTheme, dispatch} = useContext(DarkThemeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."></input>
                    <SearchIcon className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        {
                            darkTheme==="white"
                            ? <LightModeIcon className="icon" onClick={()=>{dispatch({type: ACTIONS.TOGGLE})}}/>
                            : <DarkModeOutlinedIcon className="icon" onClick={()=>{dispatch({type: ACTIONS.TOGGLE})}}/>
                        } 
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className="icon"/>
                        <div className="red-box">2</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="red-box">1</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
