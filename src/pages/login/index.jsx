import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate()
    const { handleLogin } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "desmondfon@yahoo.com" && password === "12345678") {
            handleLogin({email, password})
            toast.success('Login successful')
            navigate('/product')
        }
        else {
            toast.error("Invalid credentials")
        }

    }

    return (
        <div className='w-[80%] mx-auto py-20 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-center'>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='input-field' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='input-field' />
                <button type='submit' className='p-2 rounded-md bg-blue-500 text-white cursor-pointer px-10'>Login</button>
            </form>
        </div>
    );
}

export default Login;