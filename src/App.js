import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioHomepage from './PortfolioHomePage.js';
import LearningJournal from './LearningJournal.js';

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Landing page as the default route */}
        <Route path="/" element={<PortfolioHomepage />} />

        {/* Portal/Authentication routes */}
        <Route path="/learning" element={<LearningJournal />} />

        <Route path="" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;