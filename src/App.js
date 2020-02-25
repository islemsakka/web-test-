import React, { Component } from 'react';
import './scss/main.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './components/Profile'
import Posts from './components/Posts';
import Axios from 'axios';
import Comments from './components/Comments';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      }
  }
 
  render() { 
    return (<div className="App">
    <Router>
      <Route exact path='/' component={Profile}/>
      <Route  path='/user/:userId' component={Posts}/>
      {/* <Route path='/user/:userId/post/:postId' component={Comments}/> */}
    </Router>

   </div>  );
  }
}
 
export default App;
