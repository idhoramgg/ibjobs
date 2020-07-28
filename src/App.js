import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mantap from './pages/Mantap'

function App() {
  return (
   <Router>
     <Navbar/>

     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/Mantap">
         <Mantap/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
