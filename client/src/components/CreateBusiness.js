import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
// import { useHistory } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa"
import { bcreate } from './BusinessFunction'

const CreateBusiness = () => {

    const userEmail = jwt_decode(localStorage.getItem('usertoken')).email;
    const [businessName, setBusinessName] = useState("");
    const [location, setLocation] = useState("");
    // const history = useHistory();

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.location.href = "/";
    }

    const create = (e) => {
        e.preventDefault()

        const business = {
            business_name: businessName,
            email: userEmail,
            user_location: location
        }
        console.log(business);

        bcreate(business).then(res => {
            if (res) {
                console.log(res.status);
                window.location.href = "/explorebusiness";
            }
        })
    }

    return (
        <div className='container create-container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto create-content'>
                    <form noValidate onSubmit={create}>
                        <h1 className="mb-4 font-weight-normal">Create Business</h1>
                        <div className="form-group">
                            <label htmlFor="name">Business name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="business_name"
                                placeholder="Enter business name"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">User email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                placeholder="Enter your current loation"
                                value={userEmail}
                                onChange={(e) => setBusinessName(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current location</label>
                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                placeholder="Enter your current loation"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        {/* <input type="file" name="business_image" accept="image/png, image/gif, image/jpeg" />
                        <input type="file" name="business_video" accept="video/mp4,video/x-m4v,video/*" /> */}
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block"
                        >
                            Create
                        </button>
                    </form>
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
        </div>
    );
}

export default CreateBusiness;