import React, { Component } from 'react'

export default class CarItem extends Component {
    render() {
        const item = this.props.data;
        return (
            <div>
                <div>{item.brand}</div>
                <div>{item.brand}</div>
                <div>{item.brand}</div>
                <div>{item.brand}</div>
                <div>{item.brand}</div>
                <div>{item.brand}</div>
                <div>{item.brand}</div> 
            </div>
        )
    }

}

