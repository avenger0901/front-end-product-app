
import './App.css';
import React, { Component } from 'react'
import Carlist from './Carlist';
import { 
  Switch,
  Route, 

  BrowserRouter as Router, 
} from 'react-router-dom';
// import CarDetail from './CarDetail';


export default class App extends Component {


  render() {
    return (
      <div>
        <Router>

            <Switch>

            <Route exact path ="/api/cars" component = {Carlist}/>
            {/* <Route exact path ="/api/car/:_id" component = {CarDetail}/> */}
            {/* <Carlist data= {this.state.data}/> */}
            </Switch>
        </Router>
        
      </div>
    )
  }
}



