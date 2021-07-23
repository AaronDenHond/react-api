import { React } from "react";
import "./App.css";
import DataFetch from "./Components/DataFetch";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./Components/Home";
import People from "./Components/People";
import Starships from "./Components/Starships";
// default exports not with curly brackets!
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/People">
              <People />
            </Route>
            <Route exact path="/Starships">
              <Starships />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
