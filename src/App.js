import React, {useState} from 'react';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([
     {id: 1, content: 'Play Pokemon Sword'},
     {id: 2, content: 'Fuck shit up'},
  ]);
  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
     <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} />
     </div>
 );
}
