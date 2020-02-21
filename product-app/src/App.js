
import './App.css';
import React, { Component } from 'react'
import Carlist from './Carlist';
import request from 'superagent'


export default class App extends Component {
  state = {
    data:[],
  };
  async componentDidMount(){
    const url = 'https://nameless-journey-14679.herokuapp.com/api/cars';
    const data = await request(url);
    console.log('data', data.body);
    this.setState({
      data:data.body,
    })
 
  }

  render() {
    return (
      <div>
        <Carlist data= {this.state.data}/>
        
      </div>
    )
  }
}



