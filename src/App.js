import "./App.css";
import Heading from "./components/Heading";
import Body from "./components/Body";

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
      <div className="name"><h1>food-Hub</h1></div>
      
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




function App() {
  return (
    <div className="App">
      <Heading />
      <Body />
    </div>
  );
}

export default App;
