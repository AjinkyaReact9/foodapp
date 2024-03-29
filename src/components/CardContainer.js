// import {data} from "../utils.js/config";
import Restaurentcard from "./Restaurentcard";
import Topcarousel from "./Topcarousels";
import { useEffect, useState } from "react";
import { img_URl } from "../utils.js/config";
import { res_URL } from "../utils.js/config";
import Shimmer from "../components/Shimmer";
import useRestaurantList from "../utils.js/useRestaurantList";

const CardContainer = () => {
  //rendering list

  // const [restaurant, setRestaurant] = useState([]);
  // const [filterData, setFilterData] = useState([]);
  // const [carouselData, setCarouselData] = useState([]);
  // const [carouselTitle, setCarouselTitle] = useState([]);
  // const [restaurantTitle, setRestaurantTitle] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setActiveCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const restaurantObject = useRestaurantList();
  console.log("restaurantObj", restaurantObject);

  const errorImg =
    "https://assets-v2.lottiefiles.com/a/20599092-1153-11ee-9268-c30010eb079e/mIDj6YQwCw.gif";

  // const getData = async () => {
  //   try {
  //     const data = await fetch(res_URL);
  //     const json = await data.json();
  //     console.log("resto", json?.data?.cards[1]?.card?.card);
  //     setRestaurant(
  //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilterData(
  //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setRestaurantTitle(json?.data?.cards[1]?.card?.card?.header?.title);
  //     setCarouselData(
  //       json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
  //     );
  //     setCarouselTitle(json?.data?.cards[0]?.card?.card?.header?.title);
  //   } catch (err) {
  //     console.log("error", err);
  //     // setErrorMessage("There is an error in your connection");
  //   }
  // };

  const searchData = (e) => {
    setSearchText(e.target.value);
  };

  const search = () => {
    // console.log("restaurant", restaurant);
    const filteredData = restaurantObject?.masterData.filter((resItem) =>
      resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    restaurantObject?.updaterRestaurant(filteredData)
    // setRestaurant(filteredData);
    console.log("filter", filteredData);
  };

  const searchRatings = () => {
    const filteredData = restaurantObject?.masterData.filter(
      (resItem) => resItem?.info?.avgRating > 4.5
    );
    if (restaurantObject?.restaurant !== restaurantObject?.masterData && category === "ratings") {
      searchReset();
      setActiveCategory("");
    } else {
      setActiveCategory("ratings");
      restaurantObject?.updaterRestaurant(filteredData)
      // setRestaurant(filteredData);
      console.log("ratings", filteredData);
    }
  };

  const searchDeliveryTime = () => {
    const filteredData = restaurantObject?.masterData.filter(
      (resItem) => resItem?.info?.sla?.deliveryTime < 30
    );
    if (restaurantObject?.restaurant !== restaurantObject?.masterData && category === "deliveryTime") {
      searchReset();
      setActiveCategory("");
    } else {
      setActiveCategory("deliveryTime");
      restaurantObject?.updaterRestaurant(filteredData)
      // setRestaurant(filteredData);
      console.log("delivery", filteredData);
    }
  };

  const searchPureVeg = () => {
    const filteredData = restaurantObject?.masterData.filter((resItem) => resItem?.info?.veg);
    if (restaurantObject.restaurantList !== restaurantObject?.masterData && category === "pureVeg") {
      searchReset();
      setActiveCategory("");
    } else {
      setActiveCategory("pureVeg");
      restaurantObject?.updaterRestaurant(filteredData)
      // setRestaurant(filteredData);
      console.log("pureVeg", filteredData);
    }
  };

  const searchReset = () => {
    restaurantObject?.updaterRestaurant(restaurantObject?.masterData)
    // setRestaurant(filterData);
    setActiveCategory("");
    // console.log("ratings", filterData);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="container">
        <div className="container d-flex mt-3 search">
          <input
            className="textInput"
            type="text"
            value={searchText}
            onChange={searchData}
          />
          <button className="btn btn-dark mx-1" onClick={search}>
            Search
          </button>
          <button
            className="btn btn-dark mx-1"
            style={{ backgroundColor: category === "ratings" ? "green" : "" }}
            onClick={searchRatings}
          >
            Ratings 4.5+
          </button>
          <button
            className="btn btn-dark mx-1"
            style={{
              backgroundColor: category === "deliveryTime" ? "green" : "",
            }}
            onClick={searchDeliveryTime}
          >
            Fast Delivery
          </button>
          <button
            className="btn btn-dark mx-1"
            style={{ backgroundColor: category === "pureVeg" ? "green" : "" }}
            onClick={searchPureVeg}
          >
            Pure Veg
          </button>
          {category && (
            <button className="btn btn-dark mx-1" onClick={searchReset}>
              Reset
            </button>
          )}
        </div>
        <div>
        <h2 className="container carousel-title mt-5">{restaurantObject?.carouselTitle}</h2>
        <div className="container cardOverflow d-flex justify-content-between gap-4 mt-2">
          {restaurantObject?.carouselData.map((item, index) => {
            return (
              <Topcarousel
                key={item?.index?.id}
                imageId={img_URl + item?.imageId}
              />
            );
          })}
        </div>
        </div>

        <h2 className="container mt-5 title">{restaurantObject?.restaurantTitle}</h2>
        <div className="container d-flex flex-wrap justify-content-between gap-3 mt-4">
          {errorMessage ? (
            <>
              <div className="alert alert-danger">
                <strong>Oops somethings went wrong!</strong>
                <a href="/">Please Try Again</a>
              </div>
              <img className="errorImg" src={errorImg} alt="errorImg" />
            </>
          ) : restaurantObject?.masterData.length !== 0 ? (
            restaurantObject?.restaurantList.map((card, index) => {
              return <Restaurentcard key={card?.info?.id} {...card?.info} />;
            })
          ) : (
            new Array(20).fill(0).map((card, index) => {
              return <Shimmer key={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
