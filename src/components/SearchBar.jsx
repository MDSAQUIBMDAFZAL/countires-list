import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ setQuery }) {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
