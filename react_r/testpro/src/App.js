import React, { Component } from 'react';
import Button from './component/Button'
import * as service from './service/posts'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      id : 0,
      title: '',
    }
  }
  onIncrement = (e) =>{
    this.fetchUserInfo(this.state.id+1)
  }
  onDecrement = (e)=>{
    this.fetchUserInfo(this.state.id-1)
  }

  fetchUserInfo = async(id)=>{
    const info = await Promise.all([
      service.getTitle(id),
      service.getContent(id)
    ])
    this.setState(prevState =>({
      id : id,
      title : info[0].data.title,
      content : info[1].data.content,
    }))
  }


  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h4>{this.state.content}</h4>
        <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
      </div>
    );
  }
}

export default App;