const topCarousel = ({ imageId }) => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel mt-5">
          <img
            src={imageId}
            alt="resImg"
            style={{
              height: "200px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default topCarousel;
