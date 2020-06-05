import React, { useState } from "react";

const searchId = "search-input";

export function Search({ runSearch }) {
  const [searchQuery, setSearchQuery] = useState();

  function performSearch(event) {
    event.preventDefault();
    runSearch(searchQuery);
  }

  return (
    <form onSubmit={performSearch}>
      <fieldset>
        <label htmlFor={searchId}>Search</label>
        <input
          type="text"
          id={searchId}
          value={searchQuery}
          onChange={({ target: { value } }) => {
            setSearchQuery(value);
          }}
        />
      </fieldset>
      <button onClick={performSearch}>Search</button>
    </form>
  );
}
