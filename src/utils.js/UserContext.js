import { createContext } from "react";


const userContext = createContext({
    userName: "GuestUser"
})

export default userContext;