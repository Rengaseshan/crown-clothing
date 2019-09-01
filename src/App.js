import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch,Link} from 'react-router-dom';
import './App.css';

const HatsPage=() =>(
  <div>
      <h1>
       Hats Page Works !!!
      </h1>
   </div>
);


function App() {
  return (
    <div>  
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
