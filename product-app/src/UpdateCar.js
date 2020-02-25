import React, { Component } from 'react'
import request from 'superagent';


export default class UpdateCar extends Component {
    state = {
        types:[],
    };
    componentDidMount = async () => {
        const types = await request.get('https://nameless-journey-14679.herokuapp.com/api/types')
        this.setState({types: types.body});
        const car = await request.get(`https://nameless-journey-14679.herokuapp.com/api/car/${this.props.match.params.id}`);

        const carToUpdate = car.body[0];
        console.log(carToUpdate);
        this.setState({
            brand: carToUpdate.brand,
            type: carToUpdate.type,
            model: carToUpdate.model,
            image: carToUpdate.image,
            year: carToUpdate.year,
            price: carToUpdate.price,
        })

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
    handleDelete = async () => {
        await request.delete(`https://nameless-journey-14679.herokuapp.com/api/car/${this.props.match.params.id}`);

        this.props.history.push('/api/cars');
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

        const dbCar = await request.put('https://nameless-journey-14679.herokuapp.com/api/cars', newCar);


        console.log(dbCar)

        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                        Brand: 
                            <input value={ this.state.brand } onChange={this.handleBrandChange}></input>
                    </label>
                    <br/>
                    <label>
                        Year: 
                            <input value={ this.state.year } onChange={this.handleYearChange}></input>
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select value={ this.state.type } onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.name}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                     <label>
                        Model: 
                            <input value={ this.state.model } onChange={this.handleModelChange}></input>
                    </label>
                    <br/>
                    <label>
                        Image: 
                            <input value={ this.state.image } onChange={this.handleImageChange}></input>
                    </label>
                    <br/>
                    <label>
                        Price: 
                            <input value={ this.state.price } onChange={this.handlePriceChange}></input>
                    </label>
                    <br/>

                    <button onClick= {this.handleDelete}
                    style={{ background: 'red', marginTop: 100}}>
                    Delete
                    </button>

                </form>
            </div>
        )
    }
}
