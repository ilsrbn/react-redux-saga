import React from "react";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { connect } from "react-redux";
import { asyncCreateTodo } from "../../store/todos.reducer";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
class TodoCreate extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
    };
  }
  state = {
    title: "",
  };
  handleChangeTitle(title) {
    this.setState({ title });
  }
  createNewTodo() {
    this.setState({ title: "" });
    this.props.dispatch(
      asyncCreateTodo({
        title: this.state.title,
        status: false,
      })
    );
    toast.success("Todo was created succesfully!");
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>New Todo</Card.Title>
          <Form>
            <Form.Group controlId="todoTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={this.state.title}
                onChange={(event) => this.handleChangeTitle(event.target.value)}
              />
            </Form.Group>
          </Form>
          <div className="d-grid gap-2 mt-2 ">
            <Button
              variant="success"
              disabled={!this.state.title}
              onClick={() => this.createNewTodo()}
            >
              <Stack
                className="me-auto text-center"
                direction="horizontal"
                gap={2}
              >
                <span className="material-symbols-outlined">add</span>
                <span>Create</span>
              </Stack>
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default connect()(TodoCreate);
