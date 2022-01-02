import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/Details">Details</Link>
          </ul>
        </nav>

        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Details" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
