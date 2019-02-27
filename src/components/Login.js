import React, { Component } from "react";
import fire from "../config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Login extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    nestedModal: false,
    closeAll: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  };

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  };

  login = () => {
    console.log(this.state.message);
  };

  login = e => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  };

  signup = () => {
    console.log(this.state.message);
  };

  signup = e => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  loginKeyDown = e => {
    if (e.key === "Enter") {
      e.stopPropagation();
      this.login();
    }
  };
  signupKeyDown = e => {
    if (e.key === "Enter") {
      e.stopPropagation();
      this.signup();
    }
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="sample" width="80" src="green_app_icon.svg" />
              </td>
              <td width="10" />
              <td>
                <h1 className="movieDB">MovieDB Search</h1>
              </td>
              <td />
              <td className="buttonGap" />
              <td>
                <button className="btn btn-success m-3" onClick={this.toggle}>
                  Login
                </button>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Login with Email
          </ModalHeader>
          <ModalBody className="modalLogin">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email address</label>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onKeyDown={this.loginKeyDown}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={this.login} color="success">
              Login
            </Button>
            <br />
            <Button color="secondary" onClick={this.toggleNested}>
              Sign Up
            </Button>

            {/* Sign Up Modal */}

            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>Sign Up with your Email</ModalHeader>
              <ModalBody className="modalSignUP">
                <div>
                  <label htmlFor="exampleInputEmail">Email address</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onKeyDown={this.signupKeyDown}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.signup}>
                  Sign Up
                </Button>
                <Button color="danger" onClick={this.toggleNested}>
                  Cancel
                </Button>{" "}
              </ModalFooter>
            </Modal>
          </ModalFooter>
        </Modal>

        <div className="row">
          <div className="col-xl-offset-3">
            <div className="box">
              <div className="bolt-post">
                <p> SABADA UY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
