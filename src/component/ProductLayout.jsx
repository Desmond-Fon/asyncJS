import { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import logo from '../assets/react.svg'

function ProductLayout() {
    const { user, handleLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    const logout = () => {
        handleLogout()
        navigate("/login")
    }

    return (
        <div className="flex justify-between min-h-screen">
            <div className="flex flex-col justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white relative w-[20%]">
                <img src={logo} alt="logo" className='w-10 h-10' />
                <Link className='hidden md:block' to="/">Home</Link>
                {user && <Link className='hidden md:block' to="/product">Product</Link>}
                <Link className='hidden md:block' to="/product/hooks">Hooks</Link>
                {user ? <button onClick={logout}>Logout</button> : <button onClick={() => navigate("/login")}>Login</button>}
            </div>
            <div className="w-[80%] p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default ProductLayout;