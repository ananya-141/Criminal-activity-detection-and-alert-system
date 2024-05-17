import React,{useState, useEffect, startTransition} from 'react';
import { Link } from "react-router-dom";
import phone from "./phone.png";
import axios from 'axios'; 
const Signin = ()=>{
  const [name,setName]=useState()
  const [password,setPassword]=useState()
  const fetchUser=async (name,password)=>{
    const user=await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        name: name,
        password:password
      })
    })
  
    const response=await user.json();
    if (response.length>0){
      window.location.href="/main"

    }
    else{
      alert("No matching record found");
    }
  }
 
    return(
        <div className="App" >
          <div className='bg-image1  h-screen flex items-center justify-center'>
            <div className='h-20 w-full flex  absolute top-0 opacity-95 bg-black'>
                <h1 className='absolute top-4 text-white text-3xl left-28'>
                  <span className='red'>Criminal</span> Activity Detection and Alert System
                </h1>
                <div className='flex justify-between absoloute ml-auto mr-20  '>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/">Home</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/about">About Us</Link></button>
                  <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/contact">Contact Us</Link></button>
                  {/* <button className='text-base font-serif px-3.5'><Link className="text-white no-underline" to="/demo">Demo video</Link></button> */}
                </div>
            </div>
            <div className="div1">
                    <div className="text-white text-center text-5xl redbox h-5/6 w-2/6 relative top-12 left-1/3">
                        <h1 className="text-white font-serif text-3xl relative top-4">
                            MEMBER LOGIN
                        </h1>
                        <div className="App">
     
      <input
       name="NAME" 
       placeholder="Username"
       className='h-12 w-4/6 border-b-2 mt-20 text-base bg-transparent '
      onChange={(e)=>setName(e.target.value)}></input>
      
      <input 
      name="Password" 
      placeholder="Password" 
      type="password"
      className='h-12 w-4/6 border-b-2 mt-24 text-base bg-transparent '
      onChange={(e)=>setPassword(e.target.value)}></input>
     
     

      <button className='buttonthree' onClick={() => fetchUser(name,password)}>Sign In</button>
    
      

    </div>
                        
                        <h6 className="relative top-16">Not an existing member?<b><Link className="text-white" to="/register">Register Now</Link></b></h6>
                    </div>
            </div>
            
             
           
          </div>
         
        </div>
      );
}
export default  Signin;

