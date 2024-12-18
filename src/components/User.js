import { useState } from "react";
import Popup from "./Popup";

const User = ({ name }) => {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const openPopup1 = () => setIsPopup1Open(true);
  const closePopup1 = () => {
    setIsPopup1Open(false);
    setIsPopup2Open(false); // Close Popup 2 when Popup 1 is closed
  };

  const openPopup2 = () => setIsPopup2Open(true);
  const closePopup2 = () => setIsPopup2Open(false);

  return (
    <div className="user-card">
      <div className="user-details">
        <h2>Developed By: {name}</h2>
        <h3>Location: Varanasi</h3>
        <h4>Contact: sp4398@gmail.com</h4>
      </div>
      <button className="btn" onClick={openPopup1}>
        Show more
      </button>

      <Popup isOpen={isPopup1Open} onClose={closePopup1}>
        <h2>Saurav Pandey</h2>
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFldmlSlSl6_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688619667466?e=1740009600&v=beta&t=aoFssg0PNt7JcrOXdm96OKWkgmKdEC3IuFnRpH_w8jk"
            alt="imag"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover", // Ensures the image doesn't distort
            }}
          />
        </div>
        <p>
        "Hello! Welcome to my website. I am a web developer with 
        extensive experience in creating websites using React.js, a popular JavaScript library. 
        This website is a demonstration of my skills and passion for web development."
        </p>
        <button
          className="btn1"
          onClick={openPopup2}
          style={{ marginRight: "10px" }}
        >
          Connect with me
        </button>
      </Popup>

      <Popup isOpen={isPopup2Open} onClose={closePopup2}>
        <h2>You can connect with me on my social media</h2>
        <p>This is the second popup, opened from Popup 1.</p>
        <button className="btn1" onClick={closePopup2}>
          Close
        </button>
      </Popup>
    </div>
  );
};

export default User;
