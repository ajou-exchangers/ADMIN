import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLoginView from "./screens/AdminLoginView";
import NonAcceptLocationsView from "./screens/NonAcceptLocationsView";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AdminLoginView />} />
          <Route path="/location" element={<NonAcceptLocationsView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
