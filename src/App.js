import React from 'react';
import Header from './components/Header/Header'
import HeadImage from './components/Header/HeadImage'
import Home from './Home.js'
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
      </Switch>
    </Router>
    </>
  )
}


export default App;
