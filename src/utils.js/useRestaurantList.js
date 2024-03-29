import { useEffect, useState } from "react";
import { res_URL } from "./config";

const useRestaurantList = () => {

    const [restaurant, setRestaurant] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [carouselData, setCarouselData] = useState([]);
    const [carouselTitle, setCarouselTitle] = useState([]);
    const [restaurantTitle, setRestaurantTitle] = useState([]);

    const getData = async () => {
        try {
          const data = await fetch(res_URL);
          const json = await data.json();
          console.log("resto", json?.data?.cards[1]?.card?.card);
          setRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setFilterData(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setRestaurantTitle(json?.data?.cards[1]?.card?.card?.header?.title);
          setCarouselData(
            json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
          );
          setCarouselTitle(json?.data?.cards[0]?.card?.card?.header?.title);
        } catch (err) {
          console.log("error", err);
        //   setErrorMessage("There is an error in your connection");
        }
      };

      useEffect(()=> {
        getData()
      }, []);

     const restaurantObject = {
        restaurantList: restaurant,
        masterData: filterData,
        carouselData: carouselData,
        carouselTitle: carouselTitle,
        restaurantTitle: restaurantTitle,
        updaterRestaurant: setRestaurant,
    }

    return restaurantObject
    
}

export default useRestaurantList;