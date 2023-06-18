import React from "react";
import { ListGroup, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { asyncInitTodos } from "../../store/todos.reducer";
import PropTypes from "prop-types";
import TodoItem from "./item";

class TodoList extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      todos: PropTypes.array,
    };
  }
  constructor(props) {
    super(props);
    this.props.dispatch(asyncInitTodos());
  }
  render() {
    return (
      <>
        {this.props.todos.length ? (
          <ListGroup>
            {this.props?.todos?.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ListGroup>
        ) : (
          <Alert variant="info">Todo list is empty!</Alert>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodoList);
