import { img_URl } from "../utils.js/config";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils.js/UserContext";

const Restaurentcard = ({
  cloudinaryImageId,
  name,
  avgRating,
  sla,
  cuisines,
  areaName,
  id
}) => {
  // const contextData = useContext(userContext);
  // console.log("context Data", contextData);
  return (
    <div className="custom-card shadow-lg p-3 bg-body rounded mt-3">
      <Link
      to={`/menu/${id}`}>
        <img
          src={img_URl + cloudinaryImageId}
          alt="resImg"
          style={{
            height: "250px",
            objectFit: "cover",
            borderRadius: "16px",
            width: "100%",
          }}
        />
      </Link>
      <h5 className="text mt-2 name">{name}</h5>
      <div className="d-flex justify-content-between">
        <div className="bg-success rounded text-white px-1 mt-1">
          ⭐{avgRating} / 10
        </div>
        <div>{sla?.deliveryTime} mins</div>
      </div>
      <div className="text-secondary cuisines">{cuisines.join(", ")}</div>
      <div className="text-secondary location">{areaName}</div>
      {/* <div className="text-secondary location">Created by - {contextData.userName}</div> */}
    </div>
  );
};

export default Restaurentcard;
