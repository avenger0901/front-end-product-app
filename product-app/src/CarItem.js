import React, { Component } from 'react'

export default class CarItem extends Component {
    render() {
        const item = this.props.data;
        return (
            <div>
                <div>
                    <img  className ='car-image'src={item.image} alt=''/>
                    <div>Brand:{item.brand}</div>
                    <div>Type: {item.type}</div>
                    <div>Year: {item.year}</div>
                    <div>Mode: {item.model}</div>
                    <div>Price: {item.price}</div>
                </div>
            </div>
        )
    }

}

