import React from "react";
import "./App.css";
import ScrollDemo from "./components/ScrollDemo";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Landing />
        <NavBar />
      </div>
      <div className="scroll">
        <ScrollDemo />
      </div>
    </div>
  );
}

export default App;
