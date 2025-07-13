import React from "react";

function SortDropdown({ sortBy, onSortChange }) {
  return (
    <div>
      <label>
        Sort by:{" "}
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default SortDropdown;
