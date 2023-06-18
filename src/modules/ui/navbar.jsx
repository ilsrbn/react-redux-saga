import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootsrapNavbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Stack from "react-bootstrap/Stack";
import { LinkContainer } from "react-router-bootstrap";
import { signInWithGoogle, onAuthChange, logout } from "../firebase/auth";
import { toast } from "react-toastify";

class Navbar extends React.Component {
  navItems = [
    {
      name: "ToDos",
      link: "/",
    },
  ];
  state = {
    isLoggedIn: false,
    name: null,
    photoUrl: null,
    loading: true,
  };
  makeState(state) {
    this.setState(state);
  }

  componentDidMount() {
    this.authStateChanged$ = onAuthChange((user) => {
      if (user) {
        this.makeState({
          isLoggedIn: true,
          name: user.displayName,
          photoUrl: user.photoURL,
          loading: false,
        });
      } else {
        this.makeState({
          isLoggedIn: false,
          name: null,
          photoUrl: null,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.authStateChanged$();
  }

  async signIn() {
    this.setState({ ...this.state, loading: true });
    await signInWithGoogle();
    toast.success("Logged in succesfully!");
  }

  async logout() {
    await logout();
    toast.info("Logged out");
  }
  render() {
    return (
      <BootsrapNavbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <BootsrapNavbar.Brand>React/Redux/Saga</BootsrapNavbar.Brand>
          {!this.state.loading ? (
            <>
              <BootsrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
              <BootsrapNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {this.state.isLoggedIn
                    ? this.navItems.map((navItem) => (
                        <LinkContainer to={navItem.link} key={navItem.name}>
                          <Nav.Link>{navItem.name}</Nav.Link>
                        </LinkContainer>
                      ))
                    : null}
                </Nav>
                <Nav>
                  {this.state.isLoggedIn ? (
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <span>{this.state.name}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <LinkContainer to="/profile">
                          <Dropdown.Item>
                            <Stack
                              className="me-auto text-center"
                              direction="horizontal"
                              gap={2}
                            >
                              <span className="material-symbols-outlined">
                                person
                              </span>
                              <span>Profle</span>
                            </Stack>
                          </Dropdown.Item>
                        </LinkContainer>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => this.logout()}>
                          <Stack
                            className="me-auto text-center"
                            direction="horizontal"
                            gap={2}
                          >
                            <span className="material-symbols-outlined">
                              logout
                            </span>
                            <span>Logout</span>
                          </Stack>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Button
                      disabled={this.state.loading}
                      variant="light"
                      onClick={() => this.signIn()}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        style={{ maxHeight: "15px", marginRight: "6px" }}
                      />
                      Login
                    </Button>
                  )}
                </Nav>
              </BootsrapNavbar.Collapse>
            </>
          ) : null}
        </Container>
      </BootsrapNavbar>
    );
  }
}

export default Navbar;
