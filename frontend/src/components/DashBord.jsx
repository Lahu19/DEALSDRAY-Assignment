import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div id='navbar' className='bg-gray-100 shadow-md p-4'>
      <ul className='flex items-center gap-8'>
    <li className='hover:text-blue-500'>Home</li>
    <li>
        <Button variant="text">
            <Link to='/create-employee' className='text-gray-700 hover:text-blue-500'>Create Employee</Link>
        </Button>
    </li>
    <li>
        <Button variant="text">
            <Link to='/employee-list' className='text-gray-700 hover:text-blue-500'>Employee List</Link>
        </Button>
    </li>
    <li className='p-2 px-10 text-red-500 border border-dashed border-red-400'>{name}</li>
    <li className='hover:text-blue-500'><Link to='/'>Logout</Link></li>
</ul>
<h1 className='text-2xl font-bold text-gray-800 mt-6 '>Dashboard</h1>
<p className='text-gray-600'>Welcome to the admin panel</p>

    </div>
  
  )
}

export default DashBord