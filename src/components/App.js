import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import GreaseFilter from "./GreaseFilter";
import SortDropdown from "./SortDropdown";

import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // Filter
  let filteredHogs = showGreased
    ? hogs.filter((hog) => hog.greased)
    : hogs;

  // Sort
  let sortedHogs = [...filteredHogs];
  if (sortBy === "name") {
    sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    sortedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />
      
      {/* ✅ Use the components here */}
      <GreaseFilter
        showGreased={showGreased}
        onToggleGreased={setShowGreased}
      />
      
      <SortDropdown
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;
