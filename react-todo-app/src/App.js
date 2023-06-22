import { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // hook「usestate」
  const[todos, setTodos] = useState([]);
  const todoNameRef =useRef();

const handleAddTodo = () => {
  const name = todoNameRef.current.value;
  setTodos((prevTodos) => {
    if (name === "") return;
    return [
      ...prevTodos
      , {
        id: uuidv4()
        , name: name
        , completed: false
      }
    ];
  });
  todoNameRef.current.value = null;
};

const handleClear =  () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
}

const toggleTodo = (id) => {
  // 「...」としているのは状態変数
  const newTodos = [...todos];
  const todo = newTodos.find(( todo ) => todo.id === id);
  // 反転処理
  todo.completed = !todo.completed;
  // 更新処理
  setTodos(newTodos);
};

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
