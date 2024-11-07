import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"
const CreateEmployee = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("")
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState()
    let [designation, setDesignation] = useState()
    let [gender, setGender] = useState("")
    let [course, setCourse] = useState([])
    let [image, setImage] = useState()

    let formHandle = (e) => {
        e.preventDefault()
        let payload = {
            name: name,
            email: email,
            phone: phone,
            image: image,
            designation: designation,
            gender: gender,
            course: course
        }

        if (!name || !email || !phone || !designation || !gender || !course || !image) {
            alert("To Create Employee Fill all the fields..!")
        }
        else {
            axios.post("http://localhost:4001/employees", payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((e) => { alert(e.data) })
                .catch(() => { console.log("can not register"); })

            navigate("/employee-list")
        }}

        let handleCourseChange = (e) => {
            const course1 = e.target.value;
            const isChecked = e.target.checked;
            if (isChecked) {
                setCourse(course.concat(course1));
            }
            else {
                setCourse(course.filter(item => item !== course1));
            }
        };

        return (
            <div className='border border-red-600 max-w-[400px] mx-auto p-8 rounded-md bg-gray-50 shadow-md'>
    
            <h1 className='text-center font-bold text-3xl mb-8 text-gray-800'>Create Employee</h1>
            
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
                onChange={(e) => setDesignation(e.target.value)}
                name='designation'
                required
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
                    <input type="radio" id="male" name="gender" value="Male" onChange={() => setGender("Male")} />
                    <span>Male</span>
                </label>
                <label className='flex items-center space-x-2'>
                    <input type="radio" id="female" name="gender" value="Female" onChange={() => setGender("Female")} />
                    <span>Female</span>
                </label>
            </div>
        
            {/* Courses Checkboxes */}
            <label className='block text-gray-700 mb-2 font-semibold'>Course</label>
            <div className='flex items-center space-x-4 mb-5'>
                <label className='flex items-center space-x-2'>
                    <input type="checkbox" id="MCA" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
                    <span>MCA</span>
                </label>
                <label className='flex items-center space-x-2'>
                    <input type="checkbox" id="BCA" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
                    <span>BCA</span>
                </label>
                <label className='flex items-center space-x-2'>
                    <input type="checkbox" id="BSC" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
                    <span>BSC</span>
                </label>
            </div>
        
            {/* File Upload */}
            <label className='block text-gray-700 mb-2 font-semibold'>Upload Your Photo</label>
            <input
                accept="image/jpeg, image/png"
                type="file"
                name='image'
                onChange={(e) => setImage(e.target.files[0])}
                className='mb-5 block w-full text-gray-600'
            />
        
            {/* Submit Button */}
            <button
                className='w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200'
                onClick={formHandle}
            >
                Register Me
            </button>
            <Link to="/dashbord/672ad87620cbae26eaae23b4" className='w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 text-center block'>
        Go to Home
    </Link>
        </div>
        
        )
    }

    export default CreateEmployee