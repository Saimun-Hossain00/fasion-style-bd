import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
         <Router>
     <Switch>
       <Route exact path ="/">
          <Home></Home>
       </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
