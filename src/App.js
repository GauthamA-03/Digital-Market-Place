import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCategory from "../src/Components/AllCategory";
import FacilityManagement from "../src/Components/FacilityManagement";
import FMLevel from "../src/Components/FMLevel";
import LPage from "../src/LPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LPage />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/fmlevel" element={<FMLevel />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
