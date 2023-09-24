
export const ACTIONS = {
    LIGHT: "LIGHT",
    DARK: "DARK",
    TOGGLE: "TOGGLE",
};

export const INITIAL_THEME = "white";

export const themeReducer = ( state, action) => {
    switch (action.type) {
        case ACTIONS.LIGHT:
            return "white";
        case ACTIONS.DARK:
            return "black";
        case ACTIONS.TOGGLE:
            return state==="white" ? "black" : "white";
        default:
            return state;
    };
};
