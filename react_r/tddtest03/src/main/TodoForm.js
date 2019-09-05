import React ,{ useState , useCallback } from 'react';

const TodoForm = ({onInsert}) => {
    const [ value, setValue ] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue('');
        e.preventDefault();
    });
    return (
    <form>
        <input 
            placeholder='inputarea'
            value={value}
            onChange={onChange}
        />
        <button type='submit'>submitbutton</button>
    </form>
    )
}

export default TodoForm