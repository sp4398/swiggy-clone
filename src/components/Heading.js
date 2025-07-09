import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center bg-pink-50 shadow-lg p-4">
      <div className="logo">
        <img className="w-56" alt="img" src={LOGO_URL} />
      </div>
      <div className="">
        <h1>Let's eat</h1>
      </div>
      <div className="nav-items">
        <ul className="flex gap-4">
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
