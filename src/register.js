
import React,{useState, useEffect, startTransition} from 'react';
import { Link } from "react-router-dom";

const Register =()=>{
    const[returnedData, setReturnedData] = useState(['hello']);
  const[employee,setEmployee] =useState({NAME:'', Username:'',Password:0,Mobile:0,email:''})
  const setInput= (e) => {
    const{name,value}=e.target;
    console.log(value);
    if (name === 'Password' || name ==='Mobile'){
      setEmployee(prevState =>({
        ...prevState,
        [name]:parseInt(value)
      }));
      return;
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]:value,
    }));

  }


  const fetchData = async () => {
    console.log(employee);
    const newData= await fetch('http://localhost:5000/api', { 
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        name: employee.NAME
      
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  }
  
  const createEmployee = async () => {
    const newData= await fetch('http://localhost:5000/hello', { 
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        ...employee
      
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  }
 

  return (
    <div className="App">
        {/* my design page */}
        <div className="App bg-image11" >
      <div className='  h-screen flex items-center justify-center'>
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
        <div className="div11">
                <div className="text-white text-center text-5xl redbox1 w-2/6 relative top-12 left-1/3">
                    <h1 className="text-white font-serif text-3xl relative top-4">
                        NEW REGISTRATION
                    </h1>
                    {/* vedio design Start*/}
                 
                    <input
                    name="NAME" 
                    placeholder='Enter Name'
                     className='h-12 w-4/6 border-b-2 mt-14 text-base bg-transparent '
                    onChange={setInput}></input>
                  

                    <input 
                    name="Username"
                    placeholder="Enter Username" className='h-12 w-4/6 border-b-2 mt-14 text-base bg-transparent ' 
                    onChange={setInput}></input>

                    <input 
                    name="Password"  type='password'
                    placeholder="Enter Numeric Password" className='h-12 w-4/6 border-b-2 mt-14 text-base bg-transparent ' 
                    onChange={setInput}></input>
                    
                    <input 
                    name="Mobile" 
                    placeholder="Enter Mobile Number" className='h-12 w-4/6 border-b-2 mt-14 text-base bg-transparent ' 
                    onChange={setInput}></input>

                    <input 
                    name="email" 
                    placeholder="Enter Email" className='h-12 w-4/6 border-b-2 mt-14 text-base bg-transparent '  
                    onChange={setInput}></input>

                    {/* trial */}
                  

                    <button className='buttonthree1' onClick={() => createEmployee()}><Link className="text-white no-underline" to="/afterregister">Register</Link></button>

      
                  
                   
                </div>
            </div>
        
        </div>
     
    </div>

 
     
    </div>
  );
}
export default Register;
