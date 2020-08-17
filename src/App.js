import React from 'react';
import Header from './components/Header/Header'
import HeadImage from './components/Header/HeadImage'
import Home from './components/Home/Home.js'
import './components/styles/styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Header />
      <HeadImage />
      <Switch>
        <Route path="/" exact component={Home} />      
        <Route path="/anime" exact />
        <Route path='/characters' exact />
      </Switch>
    </Router>
    </>
  )
}


export default App;
