import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ListGroup, Stack, Form, Button } from "react-bootstrap";
import { asyncDeleteTodo, asyncEditTodo } from "../../store/todos.reducer";
import { toast } from "react-toastify";
class TodoItem extends React.Component {
  todo;
  constructor(props) {
    super(props);
  }
  static get propTypes() {
    return {
      todo: PropTypes.object,
      dispatch: PropTypes.func,
    };
  }
  editStatus() {
    this.props.dispatch(
      asyncEditTodo({
        docId: this.props.todo.id,
        todo: { status: !this.props.todo.status, title: this.props.todo.title },
      })
    );
    toast.success("Updated status of todo!");
  }
  deleteTodo() {
    this.props.dispatch(asyncDeleteTodo(this.props.todo.id));
    toast.info("Todo was deleted succesfully!");
  }
  render() {
    return (
      <ListGroup.Item key={this.props.todo.id}>
        <Stack direction="horizontal" gap={3}>
          <Form.Check
            type="switch"
            checked={this.props.todo.status}
            onChange={() => this.editStatus()}
          />

          <span>{this.props.todo.title}</span>
          <span className="ms-auto">
            <Stack direction="horizontal" gap={2}>
              <Button
                onClick={() => this.deleteTodo()}
                variant="danger"
                size="sm"
              >
                <Stack direction="horizontal" gap={2}>
                  <span className="material-symbols-outlined">delete</span>
                </Stack>
              </Button>
            </Stack>
          </span>
        </Stack>
      </ListGroup.Item>
    );
  }
}

export default connect()(TodoItem);
