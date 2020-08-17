import React from 'react';
import Header from './components/Header/Header'
import HeadImage from './components/Header/HeadImage'
import Home from './Home.js'
import Characters from './components/Characters/Characters'
import './components/styles/styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AnimeSection from './components/currentylAiring/AnimeSection'

function App() {
  return (
    <>
    <Router>
      <Header />
      <HeadImage />
      <Switch>
        <Route path="/" exact component={Home} />      
        <Route path="/anime" exact component={AnimeSection} />
        <Route path='/characters' exact component={Characters} />
      </Switch>
    </Router>
    </>
  )
}


export default App;
