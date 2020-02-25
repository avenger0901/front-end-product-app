import request from 'superagent';
import React, { Component } from 'react'

export default class CreateCar extends Component {
    state = {
        type: 1,
        types:[]
    }
    componentDidMount = async () => {
        const types = await request.get('https://nameless-journey-14679.herokuapp.com/api/types');
        this.setState({types : types.body});
    }
    handleBrandChange = (e) => {
        this.setState({ brand: e.target.value })
    }

    handleYearChange = (e) => {
        console.log(e.target.value)
        this.setState({ year: Number(e.target.value) })
    }


    handleSubmitChange = (e) => {
        this.setState({type: e.target.value})
    }
    handleModelChange = (e) => {
        this.setState({ model: e.target.value })
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }
    handlePriceChange = (e) => {
        this.setState({ price: e.target.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const newCar = {
            brand: this.state.brand, 
            year: this.state.year, 
            type: this.state.type,
            model:this.state.model,
            image: this.state.image, 
            price: this.state.price
        }

        const dbCar = await request.post('https://nameless-journey-14679.herokuapp.com/api/cars', newCar);


        console.log(dbCar)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                Create a new car!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Brand: 
                            <input onChange={this.handleBrandChange}></input>
                    </label>
                    <br/>
                    <label>
                        Year: 
                            <input onChange={this.handleYearChange}></input>
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                     <label>
                        Model: 
                            <input onChange={this.handleModelChange}></input>
                    </label>
                    <br/>
                    <label>
                        Image: 
                            <input onChange={this.handleImageChange}></input>
                    </label>
                    <br/>
                    <label>
                        Price: 
                            <input onChange={this.handlePriceChange}></input>
                    </label>
                    <br/>

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
