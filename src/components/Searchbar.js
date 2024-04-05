import { useState } from "react";

const Searchbar = (search) => {


// const restaurantObject = useRestaurantList();

    return (
        <div className="container">
            <div className="container d-flex mt-3 search">
                <input
                    className="textInput"
                    type="text"
                    // value={searchText}
                    // onChange={searchData}
                />
                <button className="btn btn-dark mx-1" onClick={search}>
                Search
            </button>
          </div>
        </div>
    )
}

export default Searchbar;