import React, { useState } from 'react';

function FilterSortOptions({ onSortChange, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

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
    <div className="my-3">
      <div className="row">
        <div className="col-md-6">
          <label className="form-label">Sort by:</label>
          <select className="form-select" onChange={handleSortChange}>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Search by Name:</label>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterSortOptions;
