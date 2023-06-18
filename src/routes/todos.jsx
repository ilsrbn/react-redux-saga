import React from "react";
import { Row, Col } from "react-bootstrap";
import TodoList from "../modules/todo/list";
import TodoCreate from "../modules/todo/create";

export default class TodosRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <h1>Todos</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <TodoList />
          </Col>
          <Col sm={4}>
            <TodoCreate />
          </Col>
        </Row>
      </>
    );
  }
}
