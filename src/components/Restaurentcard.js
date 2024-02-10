

const Restaurentcard = ({url, name, ratings, deliveryTime, cuisines, location}) => {
    
    // const {url, name, ratings, deliveryTime, cuisines, location} = props;
    // console.log("props", props)
    return (
        <div className="custom-card">
        <div>
            <img src={url} 
            alt="resImg" width="100%" 
            style={{height: "200px", objectFit: "cover", borderRadius: "16px"}}
             />
        </div>
            <p>{name}</p>
            <div className="d-flex justify-content-between">
                <p>{ratings} / 10</p>
                <p>{deliveryTime} mins</p>
            </div>
            <p>{cuisines}</p>
            <p>{location}</p>
        </div>  
    )
}

export default Restaurentcard;

