import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants,setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    fetchData();
  },[]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );
    const json = await data.json();
    //console.log(json)
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if(listOfRestaurants.length === 0){    //this is conditional rendering
    return <Shimmer/>;
  }
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
    
    />
    <button 
    onClick={() => {
      const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setListOfRestraunt(filteredRestaurant);
    }}
    >
      Search
    </button>
    </div>
          <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
          > Top Rated Restaurants
            </button>
            </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;