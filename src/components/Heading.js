import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" alt="img" src={LOGO_URL} />
      </div>
      <div className="name">
        <h1>Let's eat</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/contact">Contact Us</Link></li>
          <li><Link className="link" to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
