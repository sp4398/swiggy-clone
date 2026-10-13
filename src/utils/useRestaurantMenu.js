import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
// import resList from "./mockData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("resId", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    // const data = await fetch(resList + resId);

    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
