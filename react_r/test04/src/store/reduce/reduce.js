
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

  export default reducer