import { useContext } from "react";
import userContext from "../utils.js/UserContext";


const Franchise = () => {
    const contextData = useContext(userContext);
    return(
        <div>
            This is franchise component Created By - {contextData.userName}
        </div>
    )
}

export default Franchise;