import React, { useState } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdModeEdit, MdRemoveCircleOutline } from 'react-icons/md'

 const TodoListItem = ({todo , onRemove}) => {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [insertToggle, setInsertToggle] = useState(false);
  
    const onInsertToggle = () => {
      if (selectedTodo) {
        setSelectedTodo(null);
      }
      setInsertToggle((prev) => !prev);
    };
    const onChangeSelectedTodo = (todo) => {
      setSelectedTodo(todo);
    };
     const {id,text,checked,}= todo;
  return (
    <div className='todolistItem'>
        <div className="checkbox">
            {
                checked ? <MdCheckBox/> :  <MdCheckBoxOutlineBlank/>

            }
           
            <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline/>
            <MdRemoveCircleOutline/>
        </div>
        <div className='edit'onClick={() =>
        {onChangeSelectedTodo(todo)
          onInsertToggle();
        }}  >
            <MdModeEdit/>
        </div>
    </div>
  )
}
export default TodoListItem