import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Forms() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    function togglePassword() {
        setShowPassword(!showPassword)
    }

    async function refreshToken () {
        const response = await axios.post("https://dummyjson.com/auth/refresh", {
            refreshToken: localStorage.getItem("refreshToken")
        })
        console.log(response.data)
        if (response.status === 200) {
            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem("refreshToken", response.data.refreshToken)
        }
    }

    async function onSubmit(data) {
        try {
            setLoading(true)
            if (localStorage.getItem("token") === null) {
                await refreshToken()
            }
            const response = await axios.post("https://dummyjson.com/auth/login", data)
            console.log(response.data)
            if (response.status === 200) {
                setLoading(false)
                localStorage.setItem("token", response.data.accessToken)
                localStorage.setItem("refreshToken", response.data.refreshToken)
                toast.success("Login successful")
                reset()
            } if (response.status === 401) {
                await refreshToken()
                const response = await axios.post("https://dummyjson.com/auth/login", data)
                console.log(response.data)
                if (response.status === 200) {
                    setLoading(false)
                    localStorage.setItem("token", response.data.accessToken)
                    localStorage.setItem("refreshToken", response.data.refreshToken)
                    toast.success("Login successful")
                    reset()
                }
            }
            else {
                setLoading(false)
                toast.error("Login failed")
                reset()
            }
        } catch (error) {
            console.log(error)
            toast.error("Login failed")
            setLoading(false)   
            reset()
        }
    }

    return (
        <div className="max-w-[50vw] mx-auto my-20">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {/* <input className="border-2 border-gray-300 rounded-md p-2" type="email" placeholder="Enter your email" {...register("email", {
                    required: "This field is required!", pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address"
                    }
                })} /> */}
                <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Enter your text" {...register("username", {
                    required: "This field is required!",
                })} />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                <div className="relative border-2 border-gray-300 rounded-md p-2">
                    <input className="w-full outline-none" type={showPassword ? "text" : "password"} placeholder="Enter your password" {...register("password", {
                        required: "Password is required", minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Password must not exceed 10 characters"
                        },
                        // pattern: {
                        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        //     message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
                        // }
                    })} />
                    <button className="absolute top-2 right-2" onClick={togglePassword}>{showPassword ? "hide" : "show"}</button>
                </div>
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                <button className="bg-blue-500 text-white rounded-md p-2" type="submit">{loading ? "Loading..." : "Submit"}</button>
            </form>
        </div>
    )
}

export default Forms