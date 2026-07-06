import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

function ProtectedRoutes({ children }) {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    return children;
}

export default ProtectedRoutes