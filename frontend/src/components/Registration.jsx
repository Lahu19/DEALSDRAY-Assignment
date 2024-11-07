import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm =()=>{
        let payload = {
            name,email,cnfPassword
        }
        if(!name || !email || !cnfPassword){
            alert("To register Fill all the fields..!")
        }
        else{
            if(password === cnfPassword ){
                axios.post('http://localhost:4001/register', payload)
            .then((e)=>{
                alert(e.data);
                navigate("/")
            })
            .catch((e)=>{
                alert("problem in sending data to the Backend.!");
            })
            }
            else{
                alert("both password should be matched..")
            }
            
        }
    }

    return (
        <div className='bg-neutral-300 h-screen flex justify-center items-center'>
    <div className='max-w-[600px] w-full h-auto border-4 border-blue-900 mx-auto shadow-xl rounded-lg p-10'>
        <h1 className='text-center font-bold text-3xl text-gray-800 my-5'>Admin Registration Form</h1>
        
        <div className='border border-red-600 max-w-full mx-auto my-5 p-10 bg-white rounded-lg'>
            <input
                className='w-full bg-white border-2 border-violet-400 text-black my-3 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
                placeholder='Enter Full Name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className='w-full bg-white border-2 border-violet-400 text-black my-3 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
                placeholder='Enter Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className='w-full bg-white border-2 border-violet-400 text-black my-3 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
                placeholder='Enter Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                className='w-full bg-white border-2 border-violet-400 text-black my-3 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
                placeholder='Retype Password'
                type='password'
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
                required
            />
            
            <button
                className='w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300'
                onClick={submitForm}
            >
                Register Me
            </button>

            <p className='mt-3 text-center'>
                Already have an account?{' '}
                <Button variant="outlined" className='text-blue-500'>
                    <Link to='/'>Sign In</Link>
                </Button>
            </p>
        </div>
    </div>
</div>


    )
}

export default Registration