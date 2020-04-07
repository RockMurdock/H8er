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
    <Navbar style={{justifyContent:"center", backgroundColor:"#484848"}}>
    <Nav pills>
      {props.hasUser ? (
        
          <>
          <NavItem>
            <NavLink 
            style={{color:"white"}}
              className="nav-link"
              href="/army-lists"
            >
              Army Lists
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            style={{color:"white"}}
              className="nav-link"
              href="/stats"
            >
              Stat Cards
            </NavLink>
          </NavItem>
          <NavItem >
            <span style={{color:"white"}} className="nav-link" onClick={handleLogout}>
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
