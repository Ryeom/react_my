import React from 'react';


//value : input값 onchange : input변경 이벤트 oninsert : 추가버튼 크릭이벤트
const TodoInput = ({value,onChange,onInsert }) => {

    const handleKeyPress = (e)=>{
        if(e.key ==='Enter'){
            onInsert();
        }
    }

    return (
        <div>
        <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>       
        <button onClick={onInsert}>추가</button>
        </div>
    );
};

export default TodoInput;