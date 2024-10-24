import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();

    },[]);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };
    const restaurantInfo = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info || {};

// Destructure with default values
const { name = '', cuisines = '', costForTwo = '', avgRating = '' } = restaurantInfo;
    return resInfo === null ?(
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
