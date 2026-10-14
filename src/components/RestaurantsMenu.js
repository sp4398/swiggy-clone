// import Simmer from "./Simmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";

// const RestaurantsMenu = () => {
//   const { resId } = useParams();

//   const resInfo = useRestaurantMenu(resId);

//   if (resInfo === null) return <Simmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card?.info;

//   // const { itemCards } =
//   //   resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories?.itemCards[0];

//   const categories =
//     resInfo?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.find((c) => c?.card?.card?.categories)
//       ?.card?.card?.categories ?? [];

//   const itemCards = categories.flatMap(
//     (category) => category.itemCards ?? []
//   );



//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - {"Rs."} {item.card.info.price / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantsMenu;




import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const { resInfo, error } = useRestaurantMenu(resId);

  // Show error if the API request fails
  if (error) {
    return <p>Failed to load menu: {error}</p>;
  }

  // Show loading UI while data is being fetched
  if (!resInfo) {
    return <Simmer />;
  }

  // Restaurant information
  const restaurantInfo = resInfo.cards?.[2]?.card?.card?.info;

  // Menu cards
  const regularCards =
    resInfo.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

  // Find menu categories
  const categories =
    regularCards.find(
      (card) => card?.card?.card?.categories
    )?.card?.card?.categories ?? [];

  // Collect items from every category
  const itemCards = categories.flatMap(
    (category) => category.itemCards ?? []
  );

  // Handle an unexpected API response structure
  if (!restaurantInfo) {
    return (
      <div>
        <h2>Restaurant information not found</h2>
        <p>Please check the API response in the browser console.</p>
      </div>
    );
  }

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h1>{restaurantInfo.name}</h1>

        <p>
          {restaurantInfo.cuisines?.join(", ")} -{" "}
          {restaurantInfo.costForTwoMessage}
        </p>
      </div>

      <h2>Menu</h2>

      {itemCards.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <ul>
          {itemCards.map((item) => {
            const info = item?.card?.info;

            if (!info) return null;

            const price = info.price ?? info.defaultPrice;

            return (
              <li key={info.id}>
                <span>{info.name}</span>
                {" - "}
                <span>
                  {price != null
                    ? `Rs. ${price / 100}`
                    : "Price unavailable"}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantsMenu;

