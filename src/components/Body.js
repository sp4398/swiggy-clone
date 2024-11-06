import ResCard from "./ResCard";
import Search from "./Search";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //useState Hook
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="options">
        <Search />
        <button className="filter-btn"
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
