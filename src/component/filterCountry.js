// CountryFilter.js

import React, { useState } from 'react';
import './css/filterCountry.css'
function CountryFilter({ onCountryFilterChange }) {
  const [selectedCountries, setSelectedCountries] = useState({
    usa: false,
    canada: false,
    uk: false,
    germany: false,
    france: false,
    // Add more countries here
  });

  const handleCountryChange = (country) => {
    const updatedCountries = { ...selectedCountries, [country]: !selectedCountries[country] };
    setSelectedCountries(updatedCountries);
    onCountryFilterChange(updatedCountries);
  };

  return (
    <div className="filter-container">
      <div className="filter">
        <h3 className="filter-title">Filter by Country</h3>
        <div className="country-list">
          {Object.keys(selectedCountries).map((country) => (
            <label key={country}>
              <input
                type="checkbox"
                checked={selectedCountries[country]}
                onChange={() => handleCountryChange(country)}
              />
              {country.toUpperCase()}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryFilter;
