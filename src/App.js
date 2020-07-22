import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Repository from "./components/Repository";
import Repositories from "./components/Repositories";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/repositories" component={Repositories} exact />
    </Router>
  );
}

export default App;
