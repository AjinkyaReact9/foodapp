const Shimmer = () => {
  new Array(20).fill(0).map((card, index) => {
    return(
      <div className="container d-flex flex-wrap justify-content-between gap-3 mt-4">
      <Shimmer key={index} />
      </div>
    )
  });
  return (
    
    <div className="custom-card d-flex flex-column gap-2">
      <div
        className="imageContainer"
        style={{ height: "150px", "background-color": "rgb(235, 233, 233)" }}
      ></div>
      <div className="nameContainer"></div>
      <div
        className="d-flex justify-content-between"
        style={{ height: "15px", "background-color": "rgb(235, 233, 233)" }}
      >
        <div className="ratingsContainer"></div>
        <div className="deliveryTimeContainer"></div>
      </div>
      <div className="cuisinesContainer"></div>
      <div className="locationContainer"></div>
    </div>
  );
};

export default Shimmer;
