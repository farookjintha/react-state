// import React from 'react';
import { Component } from 'react';

class Greetings extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            count: 100
        };
        // this.updateState = this.updateState.bind(this);
    };

    updateState = () => {
        this.setState({
            name: 'Arun',
            count: 100
        });
    };

    render(){
        return (
            <div>
                <div>
                    <button onClick={this.updateState}>Click to Greet!</button>
                </div>
               {this.state.name && alert(`Hello ${this.state.name} ! How are you!`)}
            </div>
        )
    }
}

export default Greetings;