import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import App from "../App";
import Body from "./Body";
import CustomError from "./CustomError";
import Menu from "./Menu";
import { Suspense, lazy } from "react";
const Franchise = lazy(() => (import('./Franchise')))

const approuter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <CustomError />,
        children : [
            {
                path : "",
                element: <Body />
            },
            {
                path : "about",
                element: <About/>
            },
            {
                path : "contact",
                element: <Contact />
            },
            {
                path : "menu/:resId",
                element : <Menu />
            },
            {
                path : "franchise",
                element : <Suspense fallback={<h1>Page is loading....</h1>}><Franchise /></Suspense>
            }
        ]
    }
]);

export default approuter;