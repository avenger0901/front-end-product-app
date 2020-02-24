import React, { Component } from 'react';
import CarItem from './CarItem';
import request from 'superagent';

export default class Carlist extends Component {
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
        console.log(this.state.data);
        const elementArray = this.state.data.map(car =>{
            return <CarItem data = {car} />
        });
        
        return (
            <div>
               {elementArray}
            </div>
        )
    }
}
