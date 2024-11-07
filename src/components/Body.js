import ResCard from "./ResCard";
import Search from "./Search";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //useState Hook
  const [listOfRes, setListOfRes] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json()
    console.log(json);
    setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
  };

  return (
    <div className="body">
      <div className="options">
        <Search />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="cards">
        {listOfRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
