
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import img from "../Images/photoLahu.jpg"

//  getting data from the DB to React

const EmployeeList = () => {
  let [infoFromDB, setinfoFromDB] = useState([])
  let [reload, setReload] = useState(0)
  useEffect(() => {
    axios.get("http://localhost:4001/employee-list")
      .then((e) => {
        setinfoFromDB(e.data)
      })
      .catch((e) => {
        console.log("error from EmployeeList useEffect");
      })
    setReload(1)

  }, [reload])
  let deleteUser = (e) => {
    axios.delete(`http://localhost:4001/employee-list/${e}`)
    setReload(2)
  }

  return (
    <div className='w-screen p-4'>
      <p className='text-lg font-semibold text-gray-700 mb-4'>Total Count: {infoFromDB.length}</p>
      <Link to="/dashbord/672ad87620cbae26eaae23b4" className='w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 text-center block'>
        Go to Home
    </Link>
      <table className='w-full border border-gray-300 bg-white shadow-md rounded-md'>
        <thead className='bg-gray-200 border-b border-gray-300'>
          <tr>
            <th className='px-5 py-3 text-gray-700 font-medium'>Unique Id</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Image</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Name</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Email</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Phone</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Designation</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Gender</th>
            <th className='px-5 py-3 text-gray-700 font-medium'>Course</th>
            <th className='px-8 py-3 text-gray-700 font-medium'>Action</th>
          </tr>
        </thead>

        <tbody className='text-center text-sm text-gray-600'>
          {infoFromDB.map((item, i) => (
            <tr key={item.id} className='border-b last:border-0 hover:bg-gray-100'>
              <td className='px-5 py-3 border-r'>{i + 1}</td>
              <td className='px-5 py-3 border-r'>
                <img src={img} alt='Employee' className='w-12 h-12 object-cover rounded-full mx-auto' /> 
              </td>
              <td className='px-5 py-3 border-r'>{item.name}</td>
              <td className='px-5 py-3 border-r'>{item.email}</td>
              <td className='px-5 py-3 border-r'>{item.phone}</td>
              <td className='px-5 py-3 border-r'>{item.designation}</td>
              <td className='px-5 py-3 border-r'>{item.gender}</td>
              <td className='px-5 py-3 border-r'>{item.course.join(', ')}</td>
              <td className='px-10 py-4'>
                <Link
                  to={`/edit-employee/${item._id}`}
                  className='inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 mr-4'
                >
                  Edit
                </Link>
                <Button variant='outlined' color='error' onClick={() => deleteUser(item._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default EmployeeList