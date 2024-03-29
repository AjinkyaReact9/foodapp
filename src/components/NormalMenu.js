import { useState } from "react";
import { menuListUrl } from "../utils.js/config";

const NormalMenu = ({title, filteredCollection, showList, toggleFunction}) => {

    // const [showList, setShowList] = useState(true)

    return(
        <div
              className="pt-4"
              style={{ borderBottom: "5px solid #f0f0f0" }}
            >
              <h5 onClick={toggleFunction}>{title}</h5>
              {
                showList && filteredCollection.map((itemCard, index) => (
                <div
                  className="d-flex align-items-center justify-content-between mt-3 pb-4 border-bottom"
                  key={itemCard?.card?.info?.id}
                >
                  <div>
                    <div>{itemCard?.card?.info?.isVeg ? "🟢" : "🔴"}</div>
                    <h6>{itemCard?.card?.info?.name}</h6>
                    <div>&#8377; {itemCard?.card?.info?.price / 100} </div>
                    <div>{itemCard?.card?.info?.description} </div>
                  </div>
                  <div className="thumbnail_container">
                    <img
                      src={menuListUrl + itemCard?.card?.info?.imageId}
                      style={{
                        backgroundColor: "rgb(251, 238, 215)",
                        width: "118px",
                        height: "96px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                    <button className="btn btn-success">Add</button>
                  </div>
                </div>
              ))}
            </div>
    )
}

export default NormalMenu;