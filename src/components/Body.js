import Filter from "./Filter";
import Searchbar from "./Searchbar";
import CardContainer from "./CardContainer";
import React from "react";
import { Fragment } from "react";

const Body = () => {
    // console.log("react", React)
    return(
        <>
        <Searchbar/>
        <Filter/>
        <CardContainer/>
        </>
    )
}

export default Body;