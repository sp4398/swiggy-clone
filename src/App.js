import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Heading = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          alt="img"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  return (
    <div className="res-card">
      <div className="card-img">
        <img
          className="cardImg"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg"
          alt="cardImg"
        />
      </div>
      <div className="res-detail">
        <div className="res-title">{props.name}</div>
        <span>
          ⭐{props.rating}
          <span className="distance">&nbsp;{props.time}</span>
        </span>
        <div className="desc">
          {props.cuisins}
          <br />
          Varanasi
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="txt" placeholder="Search" className="input-box"></input>
      <button className="search-btn">Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="cards">
        <ResCard
          name="KFC"
          cuisins="Biryani, Burger, Fast Food"
          rating="4.5"
          time="20-25mins"
        />
        <ResCard
          name="Burger King"
          cuisins="Burgers, Bevrages"
          rating="4.3"
          time="35-40mins"
        />
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Heading />
      <Body />
    </div>
  );
}

export default App;
