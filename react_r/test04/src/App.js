import React, { Component } from 'react';
import { connect } from 'react-redux'
import Bpp from './bpp'
class App extends Component {
  
  render() {
    console.log(`>>app`)
    return (
      <div>
        <h1>{this.props.num}</h1>
          {/* <button onClick={this.props.onMyClick}>bnt</button>         */}
        <h1>{this.props.age}</h1>
          {/* <button onClick={this.props.onAgeClick}>bnt</button>       */}
          <Bpp/>
      </div>
    );
  }
}
export const mapActionToProps = (dispatch)=>{  
  console.log(`>>>>>>action`);
  return {
    onMyClick : ()=>{
      console.log(`on my click ~!`);
      dispatch({
        type: 'MYCLICK',
      })
    },
    onAgeClick : ()=>{
      dispatch({
        type: 'AGECLICK',
      })
    },

  }
}
export function reducer(state = {
  num : 0,
  age : 100,
},action ){ 
  console.log(`reduce`,state.num);
  switch (action.type) {
    // TODO
    //--------------------------------------------------------------//
    case 'MYCLICK':
      state = {
        ...state,
        num : state.num +1,
      }
      return state 
    //--------------------------------------------------------------//
    case 'AGECLICK':
      state = {
        ...state,
        age : state.age +1,
      }
      return state
    //--------------------------------------------------------------//
    default:  return state
  }                                


}
const mapStateToProps = (state)=>{
  console.log(`>>>>>>>>>>>stateTo`);
  return { 
    num : state.num,
    age : state.age,
  }
}

export default connect(
  mapStateToProps,        
  mapActionToProps     
)(App);
