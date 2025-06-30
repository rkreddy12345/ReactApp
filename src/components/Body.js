import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterRestaurants(searchInput, restaurants) {
    return restaurants?.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()));
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchRestaurants();
    }, []);

    async function fetchRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4399183&lng=78.4360986&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setAllRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search for restaurant" value={searchInput}
                    onChange={
                        (e) => setSearchInput(e.target.value)
                    } />
                <button className="search-btn"
                    onClick={() => {
                        const data = filterRestaurants(searchInput, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    (filteredRestaurants?.length === 0) ? <h1>No restaurants found.</h1> :
                        filteredRestaurants.map(restaurant => {
                            return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                        })
                }
            </div>
        </>
    )
}

export default Body;