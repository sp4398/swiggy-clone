import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center bg-orange-500 shadow-lg p-4">
      <div className="logo">
        <img className="w-20" alt="img" src={LOGO_URL} />
      </div>
      <div className="text-4xl text-white font-sans font-bold ml-[-500px]">
        <h1>Food Express</h1>
      </div>
      <div className="nav-items">
        <ul className="flex gap-4">
          <li className="font-bold font-sans text-white">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link className="font-bold text-white font-sans" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-bold text-white font-sans" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="font-bold text-white font-sans" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-bold text-white font-sans" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="font-bold text-white font-sans" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
