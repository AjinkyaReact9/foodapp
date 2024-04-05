import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
// import { menuListUrl } from "../utils.js/config";
import useMenuList from "../utils.js/useMenuList";
import MenuHeader from "./MenuHeader";
import NormalMenu from "./NormalMenu";
import NestedMenu from "./NestedMenu";

const Menu = () => {
  const searchParams = useParams();
  const { resId } = searchParams;
  const menuList = useMenuList(resId);
  const [activeIndex, setActiveIndex] = useState(-1)
  // const menuData = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

  if (menuList.length === 0) {
    return (
      <div className="container d-flex flex-wrap justify-content-between gap-3 mt-4">
        <Shimmer />
      </div>
    );
  } else {
    console.log("datadadtadt", menuList[2]);
    // const {name, cuisines, areaName, sla, feeDetails, avgRating, totalRatingsString} = menuList[2].card?.card?.info;
    // const { itemCards } = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const filteredData =
      menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (listItem) =>
          listItem?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log("filter", filteredData);

    const nestedData =
      menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (listItem) =>
          listItem?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    console.log(
      "nestedData",
      menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );

    return (
        <div
          className="container-sm shadow-lg p-3 bg-body rounded mt-3"
          style={{ width: "70%" }}>
          <MenuHeader {...menuList[2]?.card?.card?.info}/>
          <div>
          {filteredData.map((filterItem, index) => {
            return(
              < NormalMenu 
              key={filterItem?.card?.card?.title} 
              title={filterItem?.card?.card?.title} 
              filteredCollection={filterItem?.card?.card?.itemCards}
              showList={activeIndex === index}
              toggleFunction={()=>{setActiveIndex(index)}}/>
            )
          })}
          </div>
          <div>
          {nestedData.map((nestedItem) => (
            <NestedMenu 
            key={nestedItem?.card?.card?.title} 
            title={nestedItem?.card?.card?.title} 
            nestedCollection={nestedItem?.card?.card?.categories}/>
          ))}
          </div>
        </div>
    );
  }
};

export default Menu;
