import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            setUser(JSON.parse(user))
        }
        else {
            setUser(null)
        }
    }, [])

    // const handleLogin = async (user) => {
    //     localStorage.setItem("user", JSON.stringify(user))

    //     setUser(user)

    //     try {
    //         const response = await fetch("https://api.example.com/login", {
    //             method: "POST",
    //             body: JSON.stringify(user),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         const data = await response.json()
    //         console.log(data)
    //         if (data.success) {
    //             localStorage.setItem("token", data.token)
    //             toast.success("Login successful")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleLogin = async (user) => {
        try {
            const response = await axios.post("https://api.example.com/login", { body: user }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            )
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token)
                toast.success("Login successful")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }



    const handleLogout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

// axios