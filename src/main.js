import { useState } from 'react'
import React, { useEffect } from "react";
import phone from './phone.png';
import { Link } from "react-router-dom";
import axios from "axios";

import './App.css';

function App() {

  
   // new line start
  const [knifeDetected, setKnifeDetected] = useState(false)
  var bodyFormData = new FormData();
  function checkKnifeDetection() {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/detect",
    })
    .then((response) => {
      const detected = response.data;
      setKnifeDetected(detected);
    }).catch((error) => {
      console.error('Error checking knife detection:', error);
    });
  }
  //end of new line 

  return (
    <div className="App">
          <div className='bg-image44 h-screen flex items-center justify-center'>
              
              <div className='h-20 w-full flex  absolute top-0 opacity-85 bg-black'>
                <h1 className='absolute top-4 text-white text-3xl left-28'>
                  <span className='red'>Criminal</span> Activity Detection and Alert System
                </h1>
                <div className='flex justify-between absoloute ml-auto mr-20  '>
                  
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/">Home</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/about">About Us</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/contact">Contact Us</Link></button>
                  {/* <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/demo">Demo video</Link></button> */}

                </div>
                <div className="dim4">
                
                </div>
                <h1 className="absolute opacity-100 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.9)] top-72 left-96  text-white font-bold antialiased text-center text-3xl drop-shadow-2xl	">Upload Image for Knife detection:</h1>
                
               <div className='formbox'>
                 {/* new line start*/}
                  
                 
                  <form action="http://127.0.0.1:5000/detect" method="post" className='knife' encType="multipart/form-data"><input type='file' name="image"/>
                  <button type='submit' onClick={checkKnifeDetection}></button>
                  <button type='submit' className='knisu'>Click</button>
                  </form>
                  {knifeDetected && <p>A knife has been detected!</p>}
                  {/* end of new line */}
               </div>

    
              </div>
           
          </div>
          <div >
  
    </div>
        </div>
   
  );
}

export default App;








// import React, { useEffect } from "react";
// import { useState } from 'react'
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// import UserProfile from "./UserProfile";

// const Main = ()=>{

//   const [knifeDetected, setKnifeDetected] = useState(false)
//     var bodyFormData = new FormData();
//     function checkKnifeDetection() {
//       axios({
//         method: "POST",
//         url: "http://127.0.0.1:5000/detect",
//       })
//       .then((response) => {
//         const detected = response.data;
//         setKnifeDetected(detected);
//       }).catch((error) => {
//         console.error('Error checking knife detection:', error);
//       });
//     }




//   useEffect(() => {
//     const startVideo = () => {
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then(stream => {
//           let video = document.querySelector('.app__videoFeed');
//           if (video) {
//             video.srcObject = stream;
//           }
//         })
//         .catch(error => {
//           console.error('Error accessing camera:', error);
//         });
//     };

//     startVideo();

//     // Cleanup function
//     return () => {
//       let video = document.querySelector('.app__videoFeed');
//       if (video && video.srcObject) {
//         video.srcObject.getTracks().forEach(track => {
//           track.stop();
//         });
//       }
//     };
//   }, []);

//   return (
//     <div className="app">
//       <div className='bg-image h-screen flex items-center justify-center'>
//       <div className='h-20 w-full flex  absolute top-12 opacity-85 bg-black'>
//                 <h1 className='absolute top-4 text-white text-3xl left-28'>
//                   <span className='red'>Criminal</span> Activity Detection and Alert System
//                 </h1>
//                 <div className='flex justify-between absoloute ml-auto mr-20  '>
                  
//                   <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/">Home</Link></button>
//                   <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/about">About Us</Link></button>
//                   <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/contact">Contact Us</Link></button>
//                   {/* <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/demo">Demo video</Link></button> */}

//                 </div>
//                 </div>
//         <div className="contain">
//         <div className="splitWrapper">
//           <div className="videoWrapper">
//             <div className="app__container">
//               <video
//                 className="app__videoFeed"
//                 autoPlay
//                 playsInline
//                 muted
//               ></video>
//             </div>
//           </div>
//           <div className="securityWrapper">
            
//             <div className="userProfileWrapper">
//           <UserProfile />
//         </div>
//         <p>To check if a knife is detected: </p>
//         <button onClick={checkKnifeDetection}>Check Knife Detection</button>
//         <form action="http://127.0.0.1:5000/detect" method="post" encType="multipart/form-data"><input type='file' name="image"/>
//         <button type='submit'>Click</button>
//         </form>
//         {knifeDetected && <p>A knife has been detected!</p>}
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Main  ;





