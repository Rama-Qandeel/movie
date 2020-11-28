import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Information from "./components/Information";
import Favorite from "./components/Favorite";
import Watch from "./components/Watch";
const App = () => {
  return (
    <Router>
      <div className="root">
        <Route
          path="/info"
          render={(props) => (
            <>
              <Header />
              <Information {...props} />
            </>
          )}
        />

        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route
          path="/favorite"
          render={(props) => (
            <>
              <Header />
              <Favorite />
            </>
          )}
        />
        <Route
          path="/watched"
          render={(props) => (
            <>
              <Header />
              <Watch />
            </>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
