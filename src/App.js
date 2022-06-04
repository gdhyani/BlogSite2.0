import React from "react";
import Nav from "./comp/Nav";
import "./App.css";
import Main from "./comp/Main";
import Blogs from "./comp/Blogs";
import Foot from "./comp/Foot";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Blogs />
      <Foot />
    </div>
  );
}

export default App;
