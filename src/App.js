import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TodoList from './TodoList';
import TodoEntryForm from './TodoEntryForm';
import { createMuiTheme} from '@material-ui/core/styles';

let theme = createMuiTheme();

export default function App() {

  const [todos, setTodos] = useState([
     {id: 1, content: 'Eat'},
     {id: 2, content: 'Get money'},
  ]);

 const theme = createMuiTheme({
    typography: {
     subtitle1: {
     fontSize: 12,
     fontStyle: 'italic'
   },
    body1: {
      fontWeight: 500,
    },
    button: {
     fontStyle: 'italic',
    },
  },
});


  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }

   return (
    <Container maxWidth="sm" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#FFBEDA'}}>
        <Typography variant="h3"  align="center">Things To Do</Typography>
        <TodoList todos={todos} deleter={deleteTodo}/>
        <TodoEntryForm adder={addTodo} />
      </Paper>
    </Container>
  );
}
