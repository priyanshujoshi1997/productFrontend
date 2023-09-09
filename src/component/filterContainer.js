// FilterContainer.js

import React, { useState } from 'react';
import CountryFilter from './filterCountry.js';
import './/css/filterContainer.css'
import ExpertFilter from './filterExpert.js';
import ParameterFilter from './filterParameter.js';
function FilterContainer({onFilterChange}) {
  const [selectedFilters, setSelectedFilters] = useState({
    experts: [],
    parameters: [],
    countries: [],
  });
    const handleCountryFilterChange = (selectedCountries) => {
        console.log(selectedCountries);
        for (const [key, value] of Object.entries(selectedCountries)) {
          if (value) {
            setSelectedFilters((selectedFilters) => ({
              ...selectedFilters,
              countries:[... new Set([...selectedFilters.countries, key])] ,
            }));
            onFilterChange(selectedFilters)
          }
        }
      };
      const handleParameterChange=(selectedParameters)=>{
        console.log(selectedParameters)
        for (const [key, value] of Object.entries(selectedParameters)) {
          if (value) {
            setSelectedFilters((selectedFilters) => ({
              ...selectedFilters,
              parameters: [... new Set([...selectedFilters.parameters, key])],
            }));
            onFilterChange(selectedFilters)
          }
        }
      };
      const handleExpertChange=(selectedExperts)=>{
        console.log(selectedExperts)
        for (const [key, value] of Object.entries(selectedExperts)) {
          if (value) {
            setSelectedFilters((selectedFilters) => ({
              ...selectedFilters,
              experts: [... new Set([...selectedFilters.experts, key])],
            }));
            onFilterChange(selectedFilters)
          }
        }
      };
  return (
    <div>
      <ParameterFilter onParameterFilterChange={handleParameterChange} />
      <CountryFilter onCountryFilterChange={handleCountryFilterChange} />
      <ExpertFilter onExpertFilterChange={handleExpertChange}> </ExpertFilter>
    </div>
  );
}

export default FilterContainer;
