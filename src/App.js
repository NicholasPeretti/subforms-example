import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import RouteHome from "./components/RouteHome";
import RouteSignUp from "./components/RouteSignUp";
import RouteCheckout from "./components/RouteCheckout";
import RouteAnonymousCheckout from "./components/RouteAnonymousCheckout";
import Layout from "./components/Layout";
import { HOME_ROUTE, SIGN_UP, CHECKOUT, ANON_CHECKOUT } from "./constants";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#FFA500`
    },
    secondary: {
      main: "#007aa7"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <BrowserRouter>
          <Layout>
            <Route path={HOME_ROUTE} exact component={RouteHome} />
            <Route path={SIGN_UP} exact component={RouteSignUp} />
            <Route path={CHECKOUT} exact component={RouteCheckout} />
            <Route
              path={ANON_CHECKOUT}
              exact
              component={RouteAnonymousCheckout}
            />
          </Layout>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
