
import './App.css';
import React, { Component } from 'react'
import Carlist from './Carlist';
import CarDetail from './CarDetail';
import { 
  Switch,
  Route, 

  BrowserRouter as Router, 
} from 'react-router-dom';


export default class App extends Component {


  render() {
    return (
      <div>
        <Router>

            <Switch>

            <Route exact path ="/api/cars" component = {Carlist}/>
            <Route exact path ="/api/car/:id" component = {CarDetail}/>
            </Switch>
        </Router>
        
      </div>
    )
  }
}



