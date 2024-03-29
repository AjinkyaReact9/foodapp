import { useState, useEffect } from "react";

const useMenuList = (id) => {
    const menuData = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    const [menuList, setMenuList] = useState([]);
    console.log("menulistdata", menuList);
    const getMenuData = async () => {
      try {
        const dataMenu = await fetch(menuData);
        const json = await dataMenu.json();
        console.log(
          "menuData",
          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        );
        setMenuList(json?.data?.cards);
      } catch (err) {
        console.log("error found", err);
      }
    };
  
    useEffect(() => {
      getMenuData();
    }, []);
  
  
    return menuList;
}

export default useMenuList;
