import React, { Component } from 'react'
import Counter from './components/Counter'
import NameForm from './components/NameForm';
import NameList from './components/NameList';

class App extends Component {
  state = {
    names: ['벨로퍼트', '김민준']
  }

  onInsert = (name) => {
    this.setState(({names}) => ({ names: names.concat(name) }));
  }

  render() {
    const { names } = this.state;
    const { onInsert } = this;
    return (
      <div>
        <Counter/>
        <br/>
        <h1>NAME LIST</h1>
        <NameForm onInsert={onInsert}/>
        <NameList names={names}/>
      </div>
    );
  }
}

export default App