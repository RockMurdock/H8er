import React, { useState } from "react";
import API from "../../modules/ApiManager";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form
} from "reactstrap";

const RegisterForm = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: ""
  }); //initial state equal to an object with keys email and username that have empty string value

  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRegister = evt => {
    evt.preventDefault();
    API.get("users").then(users => {
      const user = users.find(user => user.email === credentials.email);
      if (user === undefined) {
        setCredentials("credentials");
        API.save(credentials, "users");
        API.get("users").then(users => {
          const newUser = users.find(
            newUser => newUser.email === credentials.email
          );
          sessionStorage.setItem("userId", newUser.id);
          props.setUser(credentials);
          props.history.push("/army-lists");
        });
      } else {
        window.alert("email already exists");
      }
    });
  };

  return (
    <>
      <div className="loginForm" style={{backgroundColor:"#DCDCDC"}}>
        <div>
          <center>
            <br />
            <Form style={{ width: "50%", border: "solid 1px", padding: "5px" }}>
              <h3>Sign up</h3>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Username:</InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={handleFieldChange}
                  type="username"
                  id="username"
                  placeholder="username"
                ></Input>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Email Address:</InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={handleFieldChange}
                  type="email"
                  id="email"
                  placeholder="email address"
                ></Input>
              </InputGroup>
              </Form>
              <br />
              <Button type="button" onClick={handleRegister}>
                Submit
              </Button>
              <p>
                Already a user? <span></span>
                <Link
                  to="/login"
                  className="signLink"
                  style={{ textDecoration: "none" }}
                >
                  Click here
                </Link>
              </p>
          </center>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
