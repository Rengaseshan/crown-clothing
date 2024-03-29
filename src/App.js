import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route , Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>  
    <Header/>
         <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route  path='/shop' component={ShopPage}></Route>
         </Switch>
    </div>
  );
}

export default App;
