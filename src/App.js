import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TodoList from './TodoList';
import TodoEntryForm from './TodoEntryForm';


export default function App() {

  const [todos, setTodos] = useState([
     {id: 1, content: 'Play Pokemon Sword'},
     {id: 2, content: 'Fuck shit up'},
  ]);

  let content = null;
  let adder = null;
  let uuidv4 = null;
  let setContent = null;

  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }

  function submit(e) {
    e.preventDefault();
      if (content.trim()) {
         adder({ id: uuidv4(), content });
      }
    setContent('');
   }

  return (
     <Container maxWidth="sm" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
        <Typography variant="h3" align="center">Things To Do</Typography>
        <TodoList todos={todos} deleter={deleteTodo}/>
        <TodoEntryForm adder={addTodo} />
      </Paper>
    </Container>
 );
}
