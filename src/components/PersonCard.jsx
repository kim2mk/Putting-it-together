import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Age: this.props.Age
        };
    }
    render() {
        return (
            <div className="PersonCard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.Age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={()=>this.setState({Age: this.state.Age+1})}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;