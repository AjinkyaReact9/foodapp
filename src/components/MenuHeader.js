import React from 'react'

const MenuHeader = ({name, cuisines, areaName, sla, feeDetails, avgRating, totalRatingsString}) => {
  return (
    <div>
      <div className="d-flex shadow-lg p-3 bg-body rounded justify-content-between align-items-center mt-4 pb-4 border-bottom">
            <div>
              <h4 className="text">{name}</h4>
              <div className="">
                <h6 className="text-secondary">
                  {cuisines.join(", ")}
                </h6>
              </div>
              <div>
                <h6 className="text-secondary d-flex gap-2">
                  {areaName + "," + " "}{" "}
                  <h6>{sla?.lastMileTravel}</h6>
                </h6>
              </div>
              <div>
                <div className="text-secondary">
                  🚴{feeDetails?.message}
                </div>
              </div>
            </div>

            <div className="justify-content-center">
              <h5 className="text-success">
              &#9733; {avgRating}
              </h5>
              <hr></hr>
              <h6 className="text-secondary">
                {totalRatingsString}
              </h6>
            </div>
          </div>
    </div>
  )
}

export default MenuHeader;
