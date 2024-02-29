import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Toast, toast } from 'react-toastify';
export const Create = () => {
const [userData, setUserData] = useState({
    name:"",
    email:""
})

function changeHandler(event){

    const {name,value}=event.target;
    setUserData({
        ...userData,
        [name]:value
    })
};


function submitHandler(e){
    e.preventDefault();
    console.log("click");
   axios.post("https://65df9d49ff5e305f32a2a910.mockapi.io/crud/crud-youtube",
   
   {userData }
   )
   
   .then((res)=>{
    console.log(res);
    toast.success("Data added...!")
    setUserData({
        name:"",
        email:""
    })
   })
   .catch((err)=>{
    throw console.error(err);
   })
}

console.log(userData);
  return (
    <>
    <div className='mt-5'>
    <div className='flex justify-evenly'>
    <h2 className='font-bold'>Create page</h2>

    </div>
  
    <form className=' mt-5 mr-5 ml-5'
    onSubmit={submitHandler}
    >
    <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input 
    required
    type="text" 
    className="form-control" 
    name="name"
    value={userData.name}
    onChange={changeHandler}
    />
  </div>

  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input 
    required
    type="email" 
    className="form-control" 
   name="email" 
    aria-describedby="emailHelp"
    value={userData.email}
    onChange={changeHandler}
    />

  </div>

  <div className='flex gap-4 justify-evenly'>
  <button className="btn btn-primary"  role="button">Submit</button>
  <Link to="/read"><button className="btn btn-primary"  role="button">Read</button></Link>
  </div>

</form>
</div>

    </>
  )
}
