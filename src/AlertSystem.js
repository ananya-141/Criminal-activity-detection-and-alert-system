import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertSystem = () => {
  // Function to simulate motion detection
  const detectMotion = () => {
    // Play alert sound
    const alertSound = new Audio("C:\Users\anany\my-pdlab\src\emergency-alarm-with-reverb-29431.mp3");
    alertSound.play();

    // Display pop-up notification
    toast.info('Motion detected!', {
      autoClose: 5000, // Duration for which the notification will be displayed
    });
  };

  return (
    <div>
      {/* Button to simulate motion detection */}
      <button onClick={detectMotion}>Simulate Motion Detection</button>
      {/* Toast container for displaying pop-up notifications */}
      <ToastContainer />
    </div>
  );
};

export default AlertSystem;