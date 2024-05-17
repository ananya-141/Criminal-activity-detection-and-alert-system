import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import "./UserProfile.css";

function UserProfile() {
  const [alertActive, setAlertActive] = useState(false);

  useEffect(() => {
    // Function to fetch object detection result from the backend API
    const fetchObjectDetectionResult = async () => {
      try {
        // Make a GET request to your Flask API endpoint
        const response = await axios.get("http://localhost:5000/detect");
        // Assuming the response contains a property named 'weaponDetected' indicating if a weapon is detected
        const weaponDetected = response.data.weaponDetected;
        setAlertActive(weaponDetected);
      } catch (error) {
        console.error("Error fetching object detection result:", error);
      }
    };

    // Periodically fetch object detection result from the backend API
    const interval = setInterval(fetchObjectDetectionResult, 5000); // Check every 5 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  const toggleAlert = () => {
    setAlertActive(!alertActive);
    const audio = document.querySelector(".audioBtn");
    if (alertActive) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <div>
      <h2 color="black">Security and Alert System</h2>
      <h3 style={{ fontWeight: "bold", color: alertActive ? "red" : "green" }}>
        Security Status: {alertActive ? "Alert - Weapon Detected" : "Normal"}
      </h3>
      <button
        className={`btn ${alertActive ? "btn-danger" : "btn-success"}`}
        onClick={toggleAlert}
        disabled={!alertActive} // Disable the button when not in alert mode
      >
        ALERT
      </button>
      <audio className="audioBtn">
        <source src="./emergency-alarm-with-reverb-29431.mp3" />
      </audio>
    </div>
  );
}

export default UserProfile;






// import React, { useState } from "react";
// import "./UserProfile.css";

// function UserProfile() {
//   const [alertActive, setAlertActive] = useState(false);

//   const toggleAlert = () => {
//     setAlertActive(!alertActive);
//     const audio = document.querySelector(".audioBtn");
//     if (alertActive) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//   };

//   return (
//     <div>
//       <h2 color="black" >Security and Alert System</h2>
//       <h3 style={{ fontWeight: "bold", color: alertActive ? "red" : "green" }}>
//         Security Status: {alertActive ? "Alert - Weapon Detected" : "Normal"}
//       </h3>
//       <button
//         className={`btn ${alertActive ? "btn-danger" : "btn-success"}`}
//         onClick={toggleAlert}
//       >
//         {alertActive ? "ALERT" : "ALERT"}
//       </button>
//       <audio className="audioBtn">
//         <source src="./emergency-alarm-with-reverb-29431.mp3" />
//       </audio>
//     </div>
//   );
// }

// export default UserProfile;