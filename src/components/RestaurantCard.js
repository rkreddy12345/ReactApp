import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ cloudinaryImageId: imageId, name, cuisines, totalRatingsString }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + imageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{totalRatingsString}</h4>
        </div>
    )
}

export default RestaurantCard;
