import data from "../utils.js/config";
import Restaurentcard from "./Restaurentcard";

const CardContainer = () => {

    const {imgURL, name, ratings, deliveryTime, cuisines, location} = data[0];
    return (
        <div className="container d-flex justify-content-between mt-5">
        <Restaurentcard url={imgURL} name={name} ratings={ratings} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurentcard url={imgURL} name={name} ratings={ratings} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurentcard url={imgURL} name={name} ratings={ratings} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurentcard url={imgURL} name={name} ratings={ratings} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurentcard url={imgURL} name={name} ratings={ratings} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        </div>
    )
}

export default CardContainer;
