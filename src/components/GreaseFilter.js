import React from "react";

function GreaseFilter({ showGreased, onToggleGreased }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showGreased}
          onChange={(e) => onToggleGreased(e.target.checked)}
        />
        Show greased only
      </label>
    </div>
  );
}

export default GreaseFilter;
