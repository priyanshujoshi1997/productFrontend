// CountryFilter.js

import React, { useState } from 'react';
import './css/filterExpert.css'
function ExpertFilter({ onExpertFilterChange }) {
  const [selectedExperts, setSelectedExperts] = useState({
    "Expert A": false,
    "Expert B": false,
    "Expert C": false,
    "Expert D": false,
    "Expert E": false,
    // Add more countries here
  });

  const handleExpertChange = (expert) => {
    const updatedExperts = { ...selectedExperts, [expert]: !selectedExperts[expert] };
    setSelectedExperts(updatedExperts);
    onExpertFilterChange(updatedExperts);
  };

  return (
    <div className="filter-container">
      <div className="filter">
        <h3 className="filter-title">Filter by Expert</h3>
        <div className="expert-list">
          {Object.keys(selectedExperts).map((expert) => (
            <label key={expert}>
              <input
                type="checkbox"
                checked={selectedExperts[expert]}
                onChange={() => handleExpertChange(expert)}
              />
              {expert.toUpperCase()}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpertFilter;
