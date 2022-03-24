import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { FaRegUserCircle } from "react-icons/fa";

class Profile extends Component {

  logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    window.location.href = "/";
  }

  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container profile-container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
          <div className='useroption'>
            <FaRegUserCircle />
            <ul className='drdw'>
              <li>
                <a href='/profile'>Profile</a>
              </li>
              <li>
                <a onClick={this.logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
