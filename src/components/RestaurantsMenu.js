import React, { useEffect, useState } from 'react'
import Simmer from './Simmer';

const RestaurantsMenu = () => {

  const [resInfo,setResInfo]=useState(null);
  useEffect(()=>{
    fetchMenu();
  },[]);
  const fetchMenu=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151649&catalog_qa=undefined&submitAction=ENTER")
    const json=data.json()
    setResInfo(json.data)

  }

  if (resInfo===null) return <Simmer/>

  // const{name}=resInfo?.cards[2]?.card?.card?.info

  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      {/* <p>{cuisines}-{costForTwoMessage}</p> */}
      <h2>Menu</h2>
      <ul>
        <li>Noodles</li>
        <li>Noodles</li>
        <li>Noodles</li>
      </ul>
    </div>
  )
}

export default RestaurantsMenu
