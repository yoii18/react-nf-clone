import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="absolute w-full p-4 flex items-center justify-between z-50">
            <Link to='/'>
                <img src={logo} className="w-30 h-12 m-2 cursor-pointer">
                </img>
            </Link>

            <div>
                <Link to='/login'>
                    <button className="capitalize px-6 py-2 border border-white-500 rounded">Login</button>
                </Link>
                <Link to='/signup'>
                    <button className="capitalize px-6 py-2 ml-2 bg-red-600 border border-white-500 rounded">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;