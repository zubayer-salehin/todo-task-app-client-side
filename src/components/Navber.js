import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const Navber = () => {

    const listMenu = <>
        <li><CustomLink className='font-medium' to="/home">Todo</CustomLink></li>
        <li><CustomLink className='font-medium' to="/completeTask">Complete Task</CustomLink></li>
        <li><CustomLink className='font-medium' to="/calender">Calender</CustomLink></li>
    </>
    return (
        <div className="navbar bg-purple-500 text-white px-5 sm:pr-20 sm:pl-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-500 rounded-box w-52">
                        {listMenu}
                    </ul>
                </div>
                <Link to="/home" className="btn btn-ghost normal-case text-2xl font-bold">Todo Task</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {listMenu}
                </ul>
            </div>
        </div>
    );
};

export default Navber;