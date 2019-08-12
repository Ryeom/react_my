import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} = this.props;
        //console.log(children); //key가 text가 아니면 못받음
        
        return (
            <div onClick={onToggle}>
                <input type='checkbox' checked={done} readOnly/>
                <div>{children}</div>
                <button onClick={(e)=>{
                    onRemove()
                    e.stopPropagation()//요거있어야한다

                }}>delete</button>
            </div>
        );
    }
}

export default TodoItem;