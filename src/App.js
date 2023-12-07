import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLoginView from "./screens/AdminLoginView";
import LocationView from "./screens/LocationView";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AdminLoginView />} />
          <Route path="/location" element={<LocationView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
