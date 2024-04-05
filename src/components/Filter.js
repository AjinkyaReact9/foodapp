const Filter = ({Ratings, DeliveryTime, PureVeg, Reset, category}) => {

    return (
        <div className="container d-flex mt-3 search">
            <button
            className="btn btn-dark mx-1"
            style={{ backgroundColor: category === "ratings" ? "green" : "" }}
            onClick={Ratings}
          >
            Ratings 4.5+
          </button>
          <button
            className="btn btn-dark mx-1"
            style={{
              backgroundColor: category === "deliveryTime" ? "green" : "",
            }}
            onClick={DeliveryTime}
          >
            Fast Delivery
          </button>
          <button
            className="btn btn-dark mx-1"
            style={{ backgroundColor: category === "pureVeg" ? "green" : "" }}
            onClick={PureVeg}
          >
            Pure Veg
          </button>
          {category && (
            <button className="btn btn-dark mx-1" onClick={Reset}>
              Reset
            </button>
          )}
        </div>
    )
}

export default Filter;