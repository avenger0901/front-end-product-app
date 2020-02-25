import React, { Component } from 'react'
// import request from 'superagent';
import { getCars } from './api.js';

export default class CarDetail extends Component {
    state = {
        data : {},
    }
    async componentDidMount() {
        const data = await getCars(this.props.match.params.id);
        if (data.body) {
            this.setState({ data: data.body[0] })
        }
        console.log(data);
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <img  className ='car-image'src={data.image} alt=''/>
                <p>Brand: { data.brand}</p>
                <p>Type: { data.type }</p>
                <p>Year: { data.year }</p>
                <p>Model: { data.model}</p>
                <p>Price: { data.price }</p>
            </div>
        )
    }
}
