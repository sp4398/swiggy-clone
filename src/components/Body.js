import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //useState Hook
  const [listOfRes, setListOfRes] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6319387&lng=77.2811014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setSearchedRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are Offline!</h1>;
  }

  if (listOfRes.length === 0) {
    return <Simmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-between items-center p-4">
        <div className="search">
          <input
            type="txt"
            placeholder="Search"
            className="border border-gray-400 rounded-lg p-2 w-60"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-orange-500 rounded-lg p-2 ml-5 text-white font-bold"
            onClick={() => {
              console.log(searchText);

              const searchedRestaurant = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setSearchedRestaurant(searchedRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-500 rounded-lg p-2 text-white font-bold"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(filteredList);
            setSearchedRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap mt-[50px] mx-[150px]">
        {searchedRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="link"
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
