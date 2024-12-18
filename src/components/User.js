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
      <button className="btn" onClick={openPopup1}>Show more</button>

      <Popup isOpen={isPopup1Open} onClose={closePopup1}>
        <h2>Popup 1</h2>
        <p>This is the first popup.
            hdkjfksudhfsjfbkskjl;sdf
            sfskfhfkfpof
            f  wief ffh h ehfkffhkf
            fddfvhg ffhff
            f neefwoffifjkdff fdijji off of fififdoweufnf 
        </p>
        <button className="btn1" onClick={openPopup2} style={{ marginRight: "10px" }}>Open Popup 2</button>
        <button className="btn1" onClick={closePopup1}>Close</button>
      </Popup>

      <Popup isOpen={isPopup2Open} onClose={closePopup2}>
        <h2>Popup 2</h2>
        <p>This is the second popup, opened from Popup 1.</p>
        <button className="btn1" onClick={closePopup2}>Close</button>
      </Popup>
    </div>
  );
};

export default User;
