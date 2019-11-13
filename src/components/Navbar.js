import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavLinkButton from "./NavLinkButton";
import { SIGN_UP, HOME_ROUTE, CHECKOUT, ANON_CHECKOUT } from "../constants";

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <h3>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={HOME_ROUTE}
          >
            Famazon
          </Link>
        </h3>
        <div
          style={{
            marginLeft: "50px"
          }}
        >
          <NavLinkButton exact to={SIGN_UP}>
            Sign up
          </NavLinkButton>
          <NavLinkButton exact to={CHECKOUT}>
            Logged user checkout
          </NavLinkButton>
          <NavLinkButton exact to={ANON_CHECKOUT}>
            Anonymous user checkout
          </NavLinkButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
