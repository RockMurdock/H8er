import React, { useState } from "react";
import API from "../../modules/ApiManager";
import { Link } from "react-router-dom"

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
          const newUser = users.find(newUser => newUser.email === credentials.email);
          sessionStorage.setItem("userId", newUser.id);
          props.setUser(credentials);
          props.history.push("/home");
        });
      } else {
        window.alert("email already exists");
      }
    });
  };

  return (
    <>
    <div className="loginForm">
      <div>
        <h3>Sign up</h3>
        <label htmlFor="inputName">Username:</label>
        <input
          onChange={handleFieldChange}
          type="username"
          id="username"
          placeholder="username"
        ></input>
  
        <label htmlFor="inputEmail">Email Address:</label>
        <input
          onChange={handleFieldChange}
          type="email"
          id="email"
          placeholder="email address"
        ></input>
       
          <button type="button" onClick={handleRegister}>
            Submit
          </button>
        
        Already a user? <span></span>
        <Link to="/login"  className="signLink" style={{ textDecoration: 'none'}} >
            
            Click here
          </Link>
       
      </div>
      </div>
    </>
  );
};

export default RegisterForm;