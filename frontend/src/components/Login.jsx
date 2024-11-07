import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login=()=>{
        let payload = {email, password}
        axios.post('http://localhost:4001/login', payload)
        .then((e)=>{
            if(e.data.status === "success"){
                navigate(`/dashbord/${e.data.id}`)
            }
            else if(e.data.status === "fail"){
                alert("wrong password")
            }
            else if(e.data.status === "noUser"){
                alert("Invalid Email")
            }
        })
    }

    return (
        <div className="flex justify-center py-10">
    <div className="max-w-[940px] h-auto border-4 border-blue-900 mx-auto shadow-xl p-10 rounded-lg bg-white scale-100">
        <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">Login Form</h1>
        
        <div className="border border-red-600 max-w-[300px] mx-auto p-8 rounded-md bg-gray-50 shadow-md">
            <input
                className="w-full bg-yellow-200 border-2 border-violet-400 text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="w-full bg-yellow-200 border-2 border-violet-400 text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md w-full hover:bg-red-600 transition duration-200"
                onClick={login}
            >
                LOGIN
            </button>
            
            <p className="text-center mt-6 text-gray-600">
                Don’t have an account?{" "}
                <Button variant="outlined" className="ml-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black transition duration-200">
                    <Link to="/register">Sign Up</Link>
                </Button>
            </p>
        </div>
    </div>
</div>

    )
}

export default Login