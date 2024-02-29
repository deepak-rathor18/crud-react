import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Read = () => {
const [userDataGet, setUserDataGet] = useState([])

function  fetchData(){
    axios.get("https://65df9d49ff5e305f32a2a910.mockapi.io/crud/crud-youtube").then((res)=>{
        console.log(res.data);
        setUserDataGet(res.data);
    
    }).catch((err)=>{
        throw console.error(err);
    })
}
useEffect(() => {
fetchData();

}, [])


function deleteHandler(id){
    axios.delete(`https://65df9d49ff5e305f32a2a910.mockapi.io/crud/crud-youtube/${id}`).then((res)=>{
        console.log(res);
        toast.success("userData delete sucess");
     
        fetchData();
    }).catch((err)=>{
        throw console.error(err);
        toast.error(err);
    })
}

const updateHandelr=(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
}


  return (
    <>
    <div className='mt-5 ml-5 mr-5'>
   <div className='flex justify-evenly'>
   <h1 className='font-bold'>Read operation...</h1>  
   <Link to="/"><button className="btn btn-primary"  role="button">Add More Data</button></Link>  
   </div>
      <table className="table mt-3">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">Email</th>
        <th scope="col">Update</th>
        <th scope="col">Dalete</th>
      </tr>
    </thead>
   {
    userDataGet.length==0 ? (<><h1 className='mt-[200px] float-end'>No Data Found</h1> <Link to="/"><button className="btn btn-primary mt-[50px] float-end"  role="button">Add Data</button></Link></>) :
    userDataGet.map((data)=>{
        return(
        <>
        <tbody >
        <tr className='mt-2'>
          <th scope="row">{data.id}</th>
          <td>{data.userData.name}</td>
          <td>{data.userData.email}</td>
         <td> 
         <Link to="/update">
         <button 
         onClick={()=>updateHandelr(
            data.id,
            data.userData.name,
            data.userData.email
         )}
         className="btn btn-primary"  role="button">Edit</button></Link></td>
         <td> 
         <Link to="/read">
         <button
         onClick={()=>deleteHandler(data.id)}
          className="btn btn-danger"  
          role="button">
          Delete</button>
          </Link></td>
        </tr>
  
      </tbody>
        </>)
    })
   }
  </table>
  </div>
  
    </>
  )
}
