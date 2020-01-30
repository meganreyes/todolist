import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default function TodoList({ todos, deleter }) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <Fragment key={todo.id}>
          <ListItem>
          <div className={classes.root}>
                  <List dense={dense}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ChevronRightIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary = {todo.content}/>
                          <span onClick={() => deleter(todo.id)}>
                          <IconButton edge="end" aria-label="clear">
                            <ClearIcon />
                          </IconButton>
                          </span>
                      </ListItem>
                  </List>
          </div>
          </ListItem>
          <Divider />
        </Fragment>
      );
    })
  ) : (
    <p> Nothing left to do! </p>
  );
  return <List style={{marginTop: 20}}>{todoList}</List>;
}
