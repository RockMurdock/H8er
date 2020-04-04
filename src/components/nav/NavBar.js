import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/login");
  };

  return (
    <nav>
      {props.hasUser ? (
        <ul className="navList">
          
          <li>
            <Link
              className="nav-link"
              style={{ textDecoration: "none", color: "#160D58" }}
              to="/army-lists"
            >
              Army Lists
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ textDecoration: "none", color: "#160D58" }}
              to="/stats"
            >
              Stat Cards
            </Link>
          </li>
          <li>
            <span className="nav-link" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </span>
          </li>
          
        </ul>
      ) : null}
    </nav>
  );
};

export default withRouter(NavBar);
