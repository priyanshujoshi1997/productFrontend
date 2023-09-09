// CountryFilter.js

import React, { useState } from 'react';
import './css/filterParameter.css'
function ParameterFilter({ onParameterFilterChange }) {
  const [selectedParameters, setSelectedParameters] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6:false
  });

  const handleParameterChange = (parameter) => {
    const updatedParameters = { ...selectedParameters, [parameter]: !selectedParameters[parameter] };
    setSelectedParameters(updatedParameters);
    onParameterFilterChange(updatedParameters);
  };

  return (
    <div className="filter-container">
      <div className="filter">
        <h3 className="filter-title">Filter by Parameter</h3>
        <div className="parameter-list">
          {Object.keys(selectedParameters).map((parameter) => (
            <label key={parameter}>
              <input
                type="checkbox"
                checked={selectedParameters[parameter]}
                onChange={() => handleParameterChange(parameter)}
              />
              {parameter.toUpperCase()}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParameterFilter;
