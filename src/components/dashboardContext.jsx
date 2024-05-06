import { createContext } from "react";
import { bool, boolean } from "yup";

const DashboardContext = createContext({
    isOpenA : boolean,
    isOpenB : boolean,
    toggleOpenA : () => {},
    toggleOpenB : () => {},
    avatarImg : Object,
    changeDefault : () => {}
});

export default DashboardContext;
