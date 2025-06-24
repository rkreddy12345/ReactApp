import { useState } from "react";
import { restaurants } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterRestaurants(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()));
}

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
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
                <button className="search-btn"
                    onClick={() => {
                        const data = filterRestaurants(searchInput, restaurants);
                        setFilteredRestaurants(data);
                    }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map(restaurant => {
                        return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                    })
                }
            </div>
        </>
    )
}

export default Body;