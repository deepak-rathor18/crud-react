import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Update = () => {
    const navigate=  useNavigate();
// const [id, setId] = useState("")
// const [name, setName] = useState("")
// const [email, setEmail] = useState("")
const [userData, setUserData] = useState({
    id:"",
    name:"",
    email:""
})



useEffect(() => {
setUserData({
    id:localStorage.getItem("id"),
    name:localStorage.getItem("name"),
    email:localStorage.getItem("email")

})


}, [])

function handleUpdate(e){
    e.preventDefault();
    axios.put(`https://65df9d49ff5e305f32a2a910.mockapi.io/crud/crud-youtube/${userData.id}`,{userData}).then((res)=>{
        console.log(res);
        toast.success("updated...")
        navigate("/read")

    }).catch((err)=>{
        throw console.error(err);
        toast.error(err)
    })
}

function changeHandler(event){

    const {name,value}=event.target;
    setUserData({
        ...userData,
        [name]:value
    })
};

  return (
    <>
    
    <div className='mt-5'>
    <div className='flex justify-evenly'>
    <h2 className='font-bold'>Update page</h2>

    </div>
  
    <form className=' mt-5 mr-5 ml-5'
    onSubmit={handleUpdate}
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

  <div className='flex gap-4'>
  <button className="btn btn-primary"  role="button">Update</button>
 <Link to="/read"> <button className="btn btn-primary"  role="button">Back</button></Link>
  
  </div>

</form>
</div>
    </>
  )
}
