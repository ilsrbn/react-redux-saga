import Navbar from "../modules/ui/navbar";
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { onAuthChange, getCurrentUser } from "../modules/firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class Root extends React.Component {
  authStateChanged$;
  state = {
    isLoggedIn: !!getCurrentUser()?.email,
  };
  componentDidMount() {
    this.authStateChanged$ = onAuthChange((user) => {
      this.setState({
        isLoggedIn: !!user,
      });
    });
  }
  componentWillUnmount() {
    this.authStateChanged$();
  }
  render() {
    return (
      <>
        <ToastContainer />
        <Navbar />
        <main>
          <Container className="py-5">
            {this.state.isLoggedIn ? (
              <Outlet />
            ) : (
              <Row className="my-5">
                <Col>
                  <Alert variant="warning">
                    Login to your Account and start managing your todos!
                  </Alert>
                </Col>
              </Row>
            )}
          </Container>
        </main>
      </>
    );
  }
}
