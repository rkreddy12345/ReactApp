import { useState } from "react";
import { restaurants } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search for restaurant" value={searchInput}
                    onChange={
                        (e) => {
                            setSearchInput(e.target.value);
                        }
                    } />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map(restaurant => {
                        return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                    })
                }
            </div>
        </>
    )
}

export default Body;