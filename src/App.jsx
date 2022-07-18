import React, { useCallback, useRef, useState } from 'react'
import Todoinshert from './component/Todoinshert'
import TodoList from './component/TodoList'
import TotoTemplate from './component/TotoTemplate'
import ToDoEdit from './component/TodoEdit'
import Table from './component/Table'


const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); 
      nextId.current++;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  const [insertToggle, setInsertToggle] = useState(false);


  return (

    <TotoTemplate>
      <Todoinshert onInsert={onInsert}/>
      <TodoList onToggle={onToggle} todos={todos} onRemove={onRemove}/>
      {
        insertToggle && (<ToDoEdit/>)
      }
   <Table/>
    </TotoTemplate>
  )
}
export default App