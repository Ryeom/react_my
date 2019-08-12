import React, {Component} from 'react';
import TodoInput from './component/Input/TodoInput'
import TodoList from './component/List/TodoList'
class App extends Component {
  state = {
    input:'',
    todos : [
      //{id:0,text:'ㅎㅇㅎㅇ',done:true},
    ],
  }

  id = 1
  getId=()=>{
    return ++this.id
  }
  handleChange = (e)=>{
    const {value} = e.target;
    this.setState({
      input:value,
    })
  }
  handleInsert = ()=>{
    const {todos,input} = this.state

    const newTodo = {
      text : input,
      done : false,
      id : this.getId()
    }
    this.setState({
      todos:[...todos,newTodo],
      input : '',
    })
  }
  handleToggle = (id)=>{  //id로 찾음
    const {todos} = this.state
    const index = todos.findIndex(todo=>todo.id ===id)

    const toggled = { //done반전
      ...todos[index],
      done:!todos[index].done,
    }
    this.setState({
      todos : [
      ...todos.slice(0,index),
      toggled,
      ...todos.slice(index+1,todos.length),
    ]
    })
  }
  handleRemove = (id) =>{
    const {todos} = this.state
    const index = todos.findIndex(todo=>todo.id ===id)
    this.setState({
      todos : [
        ...todos.slice(0,index),
        ...todos.slice(index+1,todos.length),
      ]
    })
  }
  render(){
    const { input, todos } = this.state
    const { handleChange, handleInsert, handleToggle, handleRemove } = this
    return (
      <div className="App">
        <h1>일정관리</h1>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </div>
    )
  }

}

export default App;
