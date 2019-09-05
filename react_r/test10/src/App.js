import React, { Component } from 'react';
import axios from 'axios'
import querystring from 'querystring'
class App extends Component {
  f1 = async ()=>{
    console.log(`f1 call`);
    // await axios.get(`/dpp`,{
    //   params : {
    //     name : '홍길덩',
    //     age : 30
    //   }
    // })//localhost어쩌고저쩌고 || 
    
    const obj = {
      name : 'asdf',
      age : 100
    }
    //query-string
    const str = querystring.stringify(obj)
    console.log(str);
    
    await axios.get(`/epp/?${str}`,{})
    .catch(()=>{
      console.log(`서버에서 답장이 없는 경우 생긴다 poromise`);
    })
  }
  f2 = async ()=>{
    console.log(`f1 call`);
    const name = `안농`
    const age = 100
    const obj = {
      name,
      age,
    }
    const str = querystring.stringify(obj)
    console.log(str);
    
    await axios.get(`/fpp/?${str}`,{})
    // .catch(()=>{
    //   console.log(`서버에서 답장이 없는 경우 생긴다 poromise`)
    // })

    await axios.get(``,{})
  }



    f3 = async () =>{
      await axios.post('/post1',{
        "id":"안녕얘들아",
        "age":345
      })
      const obj = { "id":"안녕","age":1234}
      await axios.post('/post2',obj)

    }






  render() {
    return (
      <div>
        <h1> 하희66 </h1>
        <button onClick={this.f1}>bnt1</button>
        <button onClick={this.f2}>bnt1</button>
        <button onClick={this.f3}>bnt1</button>
       
      </div>
    );
  }
}

export default App;