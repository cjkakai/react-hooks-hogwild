import React, { useState } from "react";

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="hog-tile" onClick={handleClick} style={{ border: "1px solid gray", margin: "10px", padding: "10px", cursor: "pointer" }}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} style={{ width: "200px" }} />

      {showDetails && (
        <div className="hog-details">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
          <p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;
