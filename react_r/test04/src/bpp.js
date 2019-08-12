import React, { Component } from 'react';
import { connect } from 'react-redux'

class Bpp extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                 <button onClick={this.props.onMyClick}>bnt</button>        
                <h1>{this.props.age}</h1>
                 <button onClick={this.props.onAgeClick}>bnt</button> 
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return { 
        age : state.age,
        num: state.num,
      }
}

Bpp = connect(mapStateToProps)(Bpp)
export default Bpp;