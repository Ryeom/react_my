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

  export default mapActionToProps