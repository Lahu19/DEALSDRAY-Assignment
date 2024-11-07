import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'


const EditEmployee = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState()
  let [designation, setDesignation] = useState()
  let [gender, setGender] = useState()
  let [courses, setCourses] = useState([])
  let [image, setImage] = useState()


  let idObj = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:4001/employee-list/${idObj.ID}`)
      .then((e) => {
        setName(e.data.name);
        setEmail(e.data.email);
        setPhone(e.data.phone)
        setDesignation(e.data.designation)
        setGender(e.data.gender)
        setCourses(e.data.course)
      })
      .catch(() => { console.warn("erro"); })
  }, [])

  // checkBox handling
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter(course => course !== value));
    }
  };

  let formHandle = (e) => {
    e.preventDefault()
    let payload = {
      name: name,
      email: email,
      phone: phone,
      image: image,
      designation: designation,
      gender: gender,
      course: courses
    }
    axios.put(`http://localhost:4001/employee-list/${idObj.ID}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((e) => { alert(e.data); })
      .catch(() => { console.log("err "); })

    navigate("/employee-list")

  }

  return (
    <div className='border border-red-600 max-w-[400px] mx-auto p-8 rounded-md bg-gray-50 shadow-md'>
    
    <h1 className='text-center font-bold text-3xl mb-8 text-gray-800'>Update Employee Data</h1>

    {/* Name Field */}
    <input
        className='w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
        placeholder='Enter Full Name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    {/* Email Field */}
    <input
        className='w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
        placeholder='Enter Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

    {/* Phone Field */}
    <input
        className='w-full bg-white border-2 border-violet-400 text-black placeholder-gray-500 rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
        placeholder='Enter Phone Number'
        type='tel'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
    />

    {/* Designation Dropdown */}
    <label className='block text-gray-700 mb-2 font-semibold'>Designation</label>
    <select
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className='block w-full bg-white border-2 border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md mb-5 focus:outline-none focus:shadow-outline'
    >
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
    </select>

    {/* Gender Radio Buttons */}
    <label className='block text-gray-700 mb-2 font-semibold'>Gender</label>
    <div className='flex items-center space-x-4 mb-5'>
        <label className='flex items-center space-x-2'>
            <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} />
            <span>Male</span>
        </label>
        <label className='flex items-center space-x-2'>
            <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
            <span>Female</span>
        </label>
    </div>

    {/* Courses Checkboxes */}
    <label className='block text-gray-700 mb-2 font-semibold'>Courses</label>
    <div className='flex items-center space-x-4 mb-5'>
        <label className='flex items-center space-x-2'>
            <input type="checkbox" value="MCA" checked={courses.includes('MCA')} onChange={handleCheckboxChange} />
            <span>MCA</span>
        </label>
        <label className='flex items-center space-x-2'>
            <input type="checkbox" value="BCA" checked={courses.includes('BCA')} onChange={handleCheckboxChange} />
            <span>BCA</span>
        </label>
        <label className='flex items-center space-x-2'>
            <input type="checkbox" value="BSC" checked={courses.includes('BSC')} onChange={handleCheckboxChange} />
            <span>BSC</span>
        </label>
    </div>

    {/* File Upload */}
    <label className='block text-gray-700 mb-2 font-semibold'>Upload Your Photo</label>
    <input
        accept="image/jpeg, image/png"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className='block w-full text-gray-600 mb-5'
    />

    {/* Update Button */}
    <button
        className='w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200'
        onClick={formHandle}
    >
        Update Changes
    </button>
    <Link to="/dashbord/672ad87620cbae26eaae23b4" className='w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 text-center block'>
        Go to Home
    </Link>
</div>

  )
}

export default EditEmployee