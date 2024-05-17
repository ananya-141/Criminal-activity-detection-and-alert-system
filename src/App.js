import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import About from './about';
import Signin from './signin';
import Register from './register';
import Demo from './demo';
import Main from './main';
import Afterregister from './afterregister';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="signin" element={<Signin/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="demo" element={<Demo/>}/>
    <Route path="main" element={<Main/>}/>
    <Route path="afterregister" element={<Afterregister/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;

// import { useState } from 'react'
// import axios from "axios";
// import logo from './logo.svg';
// import './App.css';

// function App() {

//    // new line start
//   const [profileData, setProfileData] = useState(null)

//   function getData() {
//     axios({
//       method: "GET",
//       url:"http://127.0.0.1:5000/profile",
//     })
//     .then((response) => {
//       const res =response.data
//       setProfileData(({
//         profile_name: res.name,
//         about_me: res.about}))
//     }).catch((error) => {
//       if (error.response) {
//         console.log(error.response)
//         console.log(error.response.status)
//         console.log(error.response.headers)
//         }
//     })}
//     //end of new line 

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         {/* new line start*/}
//         <p>To get your profile details: </p><button onClick={getData}>Click me</button>
//         {profileData && <div>
//               <p>Profile name: {profileData.profile_name}</p>
//               <p>About me: {profileData.about_me}</p>
//             </div>
//         }
//          {/* end of new line */}
//       </header>
//     </div>
//   );
// }

// export default App;