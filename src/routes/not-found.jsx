import React from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class NotFoundRoute extends React.Component {
  render() {
    return (
      <Container className="py-5 px-5">
        <Alert variant="secondary">Page was not found...</Alert>
        <LinkContainer to="/">
          <Button>Go home</Button>
        </LinkContainer>
      </Container>
    );
  }
}
