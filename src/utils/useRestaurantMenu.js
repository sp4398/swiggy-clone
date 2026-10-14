// import { useEffect, useState } from "react";
// import { MENU_URL } from "./constants";
// // import resList from "./mockData";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   console.log("resId", resId);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(MENU_URL + resId);
//     // const data = await fetch(resList + resId);

//     const json = await data.json();
//     setResInfo(json.data);
//   };
//   return resInfo;
// };

// export default useRestaurantMenu;



import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const fetchMenu = async () => {
      try {
        setError(null);

        const response = await fetch(MENU_URL + resId);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();

        console.log("Menu API response:", json);

        setResInfo(json.data);
      } catch (err) {
        console.error("Failed to fetch restaurant menu:", err);
        setError(err.message);
      }
    };

    fetchMenu();
  }, [resId]);

  return { resInfo, error };
};

export default useRestaurantMenu;
