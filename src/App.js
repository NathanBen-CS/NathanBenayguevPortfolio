import React from 'react';
import WorkSamples from './WorkSamples';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioHomepage from './PortfolioHomePage.js';

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Landing page as the default route */}
        <Route path="/" element={<PortfolioHomepage />} />

        {/* Portal/Authentication routes */}
        <Route path="/work" element={<WorkSamples />} />

        <Route path="" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;