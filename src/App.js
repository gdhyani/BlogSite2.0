import React from "react";
import "./App.css";
import Home from "./Home";
import {
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
import BlogP from "./BlogP";
import Nav from "./comp/Nav";
import Foot from "./comp/Foot";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogID" element={<BlogP />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
