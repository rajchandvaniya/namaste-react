import { useState } from "react";
import { restaurantData } from "../data";
import RestaurantCard from "./restaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantData);

  return (
    <>
      <div className="search-container">
        <input
          className="search-box"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => setRestaurants(filterData(searchText))}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              {...restaurant.data}
            />
          );
        })}
      </div>
    </>
  );
};

function filterData(searchText) {
  return restaurantData.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

export default Body;
