import React from "react";
import "./App.css";
import {BrowserRouter as
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Header from "./header";
import Checkout from "./Checkout";
import Login from "./login";
function App() {
return (
      <Router>
      <div className="App">
        <Routes>

          <Route path="/login" element={[<Login/>]}/>

          <Route path="/" element={[<Header />, <Home />]} />

          <Route path="/checkout" element={[<Header />, <Checkout/>]} />

        </Routes>
        
      </div>
      </Router>
    
);
}
export default App;