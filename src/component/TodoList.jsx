import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos ,onRemove,onToggle}) => {
  return (
    <div className='todolist'>

        {
 todos.map((todo)=>(
     <TodoListItem onToggle={onToggle} todo={todo} onRemove={onRemove} key={todo.id}/>
 ))            

        } 
        
       
    </div>
  )
}
export default TodoList