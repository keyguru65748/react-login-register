import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import SelectPage from './components/SelectPage'
import CreateBusiness from './components/CreateBusiness'
import ExploreBusiness from './components/ExploreBusiness'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <div className="container">

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/selectpage" component={SelectPage} />
            <Route exact path="/createbusiness" component={CreateBusiness} />
            <Route exact path="/explorebusiness" component={ExploreBusiness} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
