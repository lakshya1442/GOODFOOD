import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";


let Body = () => {
  const [filter_list, setFilter_List] = useState([]);
  const [restaurant_list, setRestaurant_List] = useState([]);
  const [search_text, setSearch_Text] = useState("");

  useEffect(() => {
    console.log("hello guys, useEffect here");
    fetchData();
  }, []);

  const fetchData = async () => {



    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonCode = await data.json();
    // console.log("main fetch code is");
    // console.log(jsonCode)
    const restaurant =jsonCode?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    // console.log("restaurant is",restaurant);
    setFilter_List(restaurant);
    setRestaurant_List(restaurant);
  };



  if(status===false) return <h1>Sorry, you are not online. Try to connect with Network.</h1>

  return filter_list.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-10">
      <div className="head flex items-center ml-10">

          <input
            className="border border-double border-black w-10/12 h-10 rounded-l  p-6"
            placeholder="name of restaurant"
            value={search_text}
            onChange={(e) => {
              console.log("element is",e);
              setSearch_Text(e.target.value);
            }}
          ></input>
          <button
            className="search  p-3 rounded-r h-13 text-md border border-black hover:bg-black hover:text-white cursor-pointer"
            onClick={() => {
              let search_element = restaurant_list.filter((res) =>
                     res.info.name.toLowerCase().includes(search_text.trim().toLowerCase())
               );
               setFilter_List(search_element);
                  
            }}
          >
            Search
          </button>


        <div className="filter ">
          <button
            className="filter-btn pl-2 p-3 rounded h-13 text-md border border-black ml-4 hover:bg-black hover:text-white cursor-pointer"
            onClick={() => {
              let data23 = restaurant_list.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilter_List(data23);
            }}
          >
            Top Result
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap mx-8" >
        {filter_list.map((restaurant) => (
          <Link className="link_card w-[250] h-[400] my-8 rounded-lg mx-2" to={"/restaurants/"+restaurant.info.id}key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body; 

