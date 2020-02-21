import React, { Component } from 'react';
import CarItem from './CarItem';


export default class Carlist extends Component {
    render() {
        console.log(this.props.data);
        const elementArray = this.props.data.map(car =>{
            return <CarItem data = {car} />
        });
        
        return (
            <div>
               {elementArray}
            </div>
        )
    }
}
