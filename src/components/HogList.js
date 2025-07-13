// HogList.js
import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  return (
    <div className="hog-list">
      {hogs.map((hog, index) => (
        <HogTile key={index} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;
