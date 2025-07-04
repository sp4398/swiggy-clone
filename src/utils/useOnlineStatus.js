import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onLineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onLineStatus;
};

export default useOnlineStatus;
// This custom hook listens for online and offline events and updates the online status accordingly.
