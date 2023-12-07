import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLoginView from "./screens/AdminLoginView";
import NonAcceptLocationsView from "./screens/NonAcceptLocationsView";
import NoneLocationDetailView from "./screens/NoneLocationDetailView";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AdminLoginView />} />
          <Route path="/none-locations" element={<NonAcceptLocationsView />} />
          <Route
            path="/none-locations/:id"
            element={<NoneLocationDetailView />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
