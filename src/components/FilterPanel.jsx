import React, { useState } from "react";
import "./FilterPanel.css"; // <-- Import your custom CSS

const FilterPanel = (props) => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceMin: "",
    priceMax: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const sendFilterOptions = () => {
    console.log(filters);
    props.filterCriteria(filters);
  };
  const handleReset = () => {
    setFilters({
      category: "",
      brand: "",
      priceMin: "",
      priceMax: "",
    });

    props.handleReset(filters);
  };

  return (
    <div className="filter-panel">
      <div className="filter-item">
        <label>Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All</option>
          {props.category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Brand</label>
        <select name="brand" value={filters.brand} onChange={handleChange}>
          <option value="">All</option>
          {props.brand.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Price Range</label>
        <div className="price-inputs">
          <input
            type="number"
            name="priceMin"
            placeholder="Min"
            value={filters.priceMin}
            onChange={handleChange}
          />
          <input
            type="number"
            name="priceMax"
            placeholder="Max"
            value={filters.priceMax}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="filter-item buttons">
        <button onClick={sendFilterOptions}>Apply</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default FilterPanel;
