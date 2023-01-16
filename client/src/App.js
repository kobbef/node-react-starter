import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios, { Axios } from "axios";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = new URL("localhost:5000/tokens/availableTokens");
      const res = await axios.get("tokens/availableTokens");
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
