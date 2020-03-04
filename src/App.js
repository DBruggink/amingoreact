import React, {useState, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/landingpage'
import Login from './pages/login'
import Navbar from './Navbar'
import Registration from './pages/registration'
import About from './pages/about'
import './App.css'
import AppContext from './AppContext'
import Profile from './pages/profile'
import Footer from './Footer'
import Feed from './pages/feed'




function App() {
 
  
 const[globalState,setGlobalState]=useState(
    {
      loggedIn: sessionStorage.getItem('jwt')?true : false,

     
    }
  )
  const LayoutRoute = ({ location, path, exact, component }) => {
    return (
        <div>
          
            <Navbar location={location.pathname} />
            <Route 
                path={path} 
                exact={exact}
                component={component}
            />
            <Footer location={location.pathname} />
        </div>
    )
}
const PrivateRoute=({component: Component, ..restOfProps})=>{
  return(
    
  )
}

  return (
    <AppContext.Provider value={[globalState,setGlobalState]}>
<BrowserRouter>
    <div className='App'>
  
  <Switch>
   
    <LayoutRoute exact path='/' component={Home} />
    <LayoutRoute path='/login' component={Login} />
    <LayoutRoute path='/register' component={Registration} />
    <LayoutRoute path='/about' component={About} />
    <LayoutRoute path='/profile' component={Profile} />
    <LayoutRoute path='/feed' component={Feed}/>

  </Switch>
  <Footer/>
    </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
