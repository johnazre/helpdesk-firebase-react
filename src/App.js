import React, { Component } from 'react';
import TopNav from './components/TopNav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import StudentMain from './pages/StudentMain'
import InstructorMain from './pages/InstructorMain'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />

          <Route exact path="/" component={Auth}/>
          <Route path="/student" component={StudentMain}/>
          <Route path="/instructor" component={InstructorMain}/>
        </div>
      </Router> 
    );
  }
}

export default App;
