import { useState } from "react";
import Popup from "./Popup";

const User = ({ name }) => {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const openPopup1 = () => setIsPopup1Open(true);
  const closePopup1 = () => {
    setIsPopup1Open(false);
    setIsPopup2Open(false);
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
            src="https://avatars.githubusercontent.com/u/84031432?v=4"
            alt="imag"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <p>
          "Hello! Welcome to my website. I am a web developer with extensive
          experience in creating websites using React.js, a popular JavaScript
          library. This website is a demonstration of my skills and passion for
          web development."
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "20px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/saurav-pandey-b399731a0/"
            target="_blank"
            title="LinkedIn"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i
              class="fab fa-linkedin"
              style={{ fontSize: "44px", color: "#0077b5" }}
            ></i>
          </a>
          <a
            href="https://x.com/sp4398"
            target="_blank"
            title="Twitter"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i
              class="fab fa-twitter-square"
              style={{ fontSize: "44px", color: "#1da1f2" }}
            ></i>
          </a>
          <a
            href="https://github.com/sp4398"
            target="_blank"
            title="GitHub"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i
              class="fab fa-github-square"
              style={{ fontSize: "44px", color: "#333" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/sp4398/#"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i
              class="fab fa-instagram-square"
              style={{ fontSize: "44px", color: "#c13584" }}
            ></i>
          </a>
        </div>
        {/* <button className="btn1" onClick={closePopup2}>
          Close
        </button> */}
      </Popup>
    </div>
  );
};

export default User;
