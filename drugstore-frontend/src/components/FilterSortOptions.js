// FilterSortOptions.js
import React, { useState } from 'react';

function FilterSortOptions({ onFilterChange, onSortChange, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    onFilterChange(filterValue);
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    onSortChange(sortValue);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  return (
    <div>
      <label>
        Filter by Brand:
        <select onChange={handleFilterChange}>
          <option value="">All Brands</option>
          <option value="Brand1">Brand1</option>
          <option value="Brand2">Brand2</option>
          {/* Add more brand options as needed */}
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={handleSortChange}>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </label>
      <label>
        Search by Name:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
    </div>
  );
}

export default FilterSortOptions;
