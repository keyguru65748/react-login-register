import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div className='container landing'>
        <div className="jumbotron mt-5">
          <div className="col-sm-6 mx-auto landing-content">
            <h1 className="text-center">WELCOME</h1>
            <span>Text about your business or company<br />Text about your business or company<br />Text about your business or company</span>
            <div>
              <Link className="landing-btn" to="/login"><span className="text">Login</span></Link>
              <Link className="landing-btn" to="/register"><span className="text">Register</span></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
