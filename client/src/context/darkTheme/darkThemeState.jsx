import DarkThemeContext from "./darkThemeContext.jsx";
import {themeReducer, INITIAL_THEME} from "../../reducer/themeReducer.js";
import { useReducer } from "react";

const DarkThemeState = (props)=>{

    const [darkTheme, dispatch] = useReducer(themeReducer, INITIAL_THEME);

    return (
        <DarkThemeContext.Provider value={{darkTheme, dispatch}} >
            {props.children}
        </DarkThemeContext.Provider>
    );
}

export default DarkThemeState;