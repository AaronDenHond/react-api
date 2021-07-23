import { React } from "react";
import "./App.css";
import DataFetchPeople from "./Components/DataFetchPeople";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./Components/Home";

import DataFetchShips from "./Components/DataFetchShips";
// default exports not with curly brackets!
function App() {
  return (
    <>
      <div className="test">
        <Router>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/People">
                <DataFetchPeople />
              </Route>
              <Route exact path="/Starships">
                <DataFetchShips />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
