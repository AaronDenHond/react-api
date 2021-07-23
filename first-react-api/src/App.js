import { React } from "react";
import "./App.css";
import DataFetch from "./Components/DataFetch";
import Navbar from "./Components/Navbar";
// default exports not with curly brackets!
function App() {
  return (
    <div className="App">
      <Navbar />
      <DataFetch />
    </div>
  );
}

export default App;
