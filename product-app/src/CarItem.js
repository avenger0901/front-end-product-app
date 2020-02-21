import React, { Component } from 'react'

export default class CarItem extends Component {
    render() {
        const item = this.props.data;
        return (
            <div>
                <div>
                    <div>{item.brand}</div>
                    <div>{item.type}</div>
                    <div>{item.year}</div>
                    <div>{item.model}</div>
                    <div>{item.price}</div>
                    <img src={item.image} alt=''/>
                </div>
            </div>
        )
    }

}

