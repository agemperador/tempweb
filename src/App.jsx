import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import Prices from './pages/prices/prices.component'
import SuperLogo from './pages/slogo/super-logo.component';

import Header from './component/header/header.component'
import Footer from './component/footer/footer.component'



class App extends React.Component {

  render(){
  return (
    <div className="App">

      <Header />

      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/soon' component={SuperLogo}/>
          <Route path='/prices' component={Prices}/>
      </Switch>

      <Footer/>
    </div>
  );
  }
}

export default App;
