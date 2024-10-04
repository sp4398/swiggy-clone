import "./App.css";

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

const ResCard = () => {
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
        <div className="res-title">Burger King</div>
        <span>
          ⭐4.5<span className="distance">&nbsp;30-35 mins</span>
        </span>
        <div className="desc">
          Beverages, Fast Food
          <br />
          Varanasi
        </div>
      </div>
    </div>
  );
};

const Search=()=>{
  return(
    <div className="search">
      <input type="txt" placeholder="Search" className="input-box"></input>
      <button className="search-btn">Search</button>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search/>
      </div>
      <div className="cards">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
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
