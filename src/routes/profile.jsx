import React from "react";
import { redirect } from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";
import { getCurrentUser } from "../modules/firebase/auth";
export default class ProfileRoute extends React.Component {
  constructor(props) {
    super(props);
    const user = getCurrentUser();
    this.state = {
      name: user.displayName,
      email: user.email,
    };
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <h1 className="h1">Profile</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" disabled value={this.state.name} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" disabled value={this.state.email} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export const loader = () => {
  return redirect("/profile");
};
