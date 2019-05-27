import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import './App.css';

class App extends Component {

  hydrate(){
    return (
      <div>
        <Home></Home>
      </div>
      // <Route>
      //   <ul>
      //     <li>
      //       <Link to="/">Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/about/">About</Link>
      //     </li>
      //     <li>
      //       <Link to="/users/">Users</Link>
      //     </li>
      //   </ul>
      // </Route>
    )
  }
}

export default App;