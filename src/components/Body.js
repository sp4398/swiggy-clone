import ResCard from "./ResCard";
import Search from "./Search";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <button
        onClick={() => {
          const filteredList = listOfRes.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRes(filteredList);
        }}
      >
        Top Rated
      </button>
      <div className="cards">
        {listOfRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
