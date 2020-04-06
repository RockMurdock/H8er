import React from "react";
import { withRouter } from "react-router-dom";
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/login");
  };

  return (
    <div>
    <Navbar color="light" style={{justifyContent:"center"}}>
    <Nav pills>
      {props.hasUser ? (
        
          <>
          <NavItem>
            <NavLink 
            style={{color:"black"}}
              className="nav-link"
              href="/army-lists"
            >
              Army Lists
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            style={{color:"black"}}
              className="nav-link"
              href="/stats"
            >
              Stat Cards
            </NavLink>
          </NavItem>
          <NavItem >
            <span className="nav-link" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </span>
          </NavItem>
          </>
        
      ) : null}
    </Nav>
    </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
