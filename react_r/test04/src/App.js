import React, { Component } from 'react';
import { connect } from 'react-redux'
//import Bpp from './bpp'
//import Compo1 from './compo1'
class App extends Component {
  
  render() {
    //console.log(`>>app render`)
    return (
      <div>
        {/* <h1>{this.props.num}</h1>
          <button onClick={this.props.onMyClick}>bnt</button>        
        <h1>{this.props.age}</h1>
          <button onClick={this.props.onAgeClick}>bnt</button>      
          <Bpp/> */}
          <h1>---App.js---</h1>
          <h2>{this.props.num}</h2>
          <h2>{this.props.str}</h2>
          {/* <button onClick={this.props.onDEC}>button dec</button>
          <h2>{this.props.num}</h2>
          <Ctn/> */}
          <Com1/>
          <Com1>tiger</Com1>
          <Cpp>lion</Cpp>
          
      </div>
    );
  }
}
class Com1 extends Component {
  render() {
    console.log(`com1`,this.props.children);
    
      return (
          <div>
            <h1>{this.props.children}</h1>
            <Ctn/>  
          </div>
      );
  }
}
class Com2 extends Component {
  render() {
      return (
          <div>
            <h1>com1</h1>
            <button onClick={this.props.onMyClick} >button</button>           
            <input type='text'></input>
            <button onClick={this.props.onStrChange}>str</button>
          </div>
      );
  }
}

const Cpp = ({children}) => {
  return (
    <div>
      
    </div>
  );
};

export const mapActionToProps = (dispatch)=>{  
  //console.log(`>>>>>>action`);
  return {
    onMyClick : ()=>{
      console.log(`asdf`);
        dispatch({
          type: 'MYCLICK',
        })
      },
      onDEC : ()=>{
        console.log(`dec`);
        dispatch({
          type:`DEC`,
        })
      },
      onStrChange : ()=>{
        console.log(`sdf`);
        dispatch({
          type:`STRCHANGE`,
        })
      }

  }
}
export function reducer(state = {
  num:0,
  str :``
}
,action ){ 
  switch (action.type) {
    // TODO
    //--------------------------------------------------------------//
    case 'MYCLICK':
      console.log(`myclick`);
      state = {
        ...state,
        num : state.num+1,
      }
      return state 
      case 'DEC':
          console.log(`myclick`);
          state = {
            ...state,
            num : state.num+1,
          }
          return state 

          case 'STRCHANGE':
          console.log(`myclick`);
          state = {
            ...state,
            str : state.str
          }
          return state 

    //--------------------------------------------------------------//
    // case 'MYCLICK':
    //   state = {
    //     ...state,
    //     num : state.num +1,
    //   }
    //   return state 
    //--------------------------------------------------------------//
    // case 'AGECLICK':
    //   state = {
    //     ...state,
    //     age : state.age +1,
    //   }
    //   return state
    //--------------------------------------------------------------//
    default:  return state
  }                                


}
const mapStateToProps = (state)=>{
  //console.log(`>>>>>>>>>>>stateTo`);
  return { 
    // num : state.num,
    // age : state.age,
    ...state,
    num : state.num,
    str : state.str,
  }
}

// export default connect(
//   mapStateToProps,        
//   mapActionToProps     
// )(App);

const Ctn = connect(
  mapStateToProps,        //state안쓴다캐서
  mapActionToProps     
)(Com2);//이렇게 묶어버리면 컨테이너(ctn)가 된다//얘가 태그처럼 사용됨
//컴포넌트 한개가 액션을 분리했더ㅏ

export default connect (mapStateToProps,mapActionToProps)(App)
