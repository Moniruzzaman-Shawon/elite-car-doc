import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/logo2.svg'

const NavBar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/'>Blog</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <div><img src={logo2} alt="" /></div>
                {/* New Dropdown with Menu Icon */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost flex items-center">
                        {/* Hamburger Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Text can be added after the icon */}
                        <span className="ml-2"></span>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>

                {/* daisyUI button */}
                <a className="btn btn-ghost text-xl italic">Elite Car Doctor</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                <button className="btn btn-outline btn-info">APPOINTMENT</button>
            </div>
        </div>
    );
};

export default NavBar;
