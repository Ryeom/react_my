import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onDecrement}>prev</button>
                <button onClick={this.props.onIncrement}>next</button>
            </div>
        );
    }
}

export default Button;