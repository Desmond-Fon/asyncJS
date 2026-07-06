import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [wines, setWines] = useState([])
    const [whites, setWhites] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchWines() {
            try {
                const response = await fetch("https://api.sampleapis.com/wines/reds")
                if (!response.ok) {
                    throw new Error("Failed to fetch wines")
                }
                const data = await response.json()
                setWines(data)
                // toast.success("Red Wines fetched successfully")
                setLoading(false)
            } catch (error) {
                setError(error.message)
                toast.error(error.message)
            }
        }

        fetchWines()
    }, [])


    // fetch with async
    // useEffect(() => {
    //     async function fetchWhites() {
    //         const token = localStorage.getItem("token")
    //         try {
    //             const response = await fetch("https://api.sampleapis.com/wines/whites", {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Authorization": `Bearer ${token}`
    //                 }
    //             })

    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch wines")
    //             }
    //             const data = await response.json()
    //             setWhites(data)
    //             // toast.success("White Wines fetched successfully")
    //             setLoading(false)
    //         } catch (error) {
    //             setError(error.message)
    //             toast.error(error.message)
    //         }
    //     }

    //     fetchWhites()
    // }, [])


    // axios with async
    useEffect(() => {
        async function fetchWhites() {
            try {
                const response = await axios.get("https://api.sampleapis.com/wines/whites", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                    setWhites(response.data)
                    setLoading(false)
                }
            } catch (error) {
                setError(error.message)
                toast.error(error.message)
            }
        }
        fetchWhites()
    }, [])

    return (
        <DataContext.Provider value={{ wines, whites, loading, error, setWines, setWhites }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;