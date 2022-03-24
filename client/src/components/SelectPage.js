import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

const Selectpage = () => {

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.location.href = "/";
    }

    return (
        <div>
            <div className='modal-container'>
                <div className='col-md-6 mt-5 row'>
                    <div className='modal--header'>
                        <h2>Choose page to you would to follow!</h2>
                    </div>
                    <div className='modal--content'>
                        <Link to="/createbusiness" className='landing-btn'>Create Business</Link>
                        <Link to="/explorebusiness" className='landing-btn'>Explore Business</Link>
                    </div>
                    <div className='modal--footer'>

                    </div>
                </div>
            </div>
            <div className='useroption'>
                <FaRegUserCircle />
                <ul className='drdw'>
                    <li>
                        <a href='/profile'>Profile</a>
                    </li>
                    <li>
                        <a onClick={logout}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Selectpage;