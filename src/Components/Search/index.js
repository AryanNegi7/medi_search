import React, { useEffect } from "react";
import { SearchContainer } from "./Search.style";

function Search({ data, search, setSearch, setSubmitted, submitted }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    // if (search.length !== 0) {
    //   setSubmitted(true);
    // }

  };

  const handleKeyDown=(e)=>{
    if (e.key === 'Enter') {
      e.preventDefault();
      setSubmitted(true);
    }
  }

  useEffect(() => {
    if (search.length === 0) {
      setSubmitted(false);
    }
  }, [setSubmitted]);
  return (
    <SearchContainer >
      <h4 className="title">Medical Search Engine</h4>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search for Information"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="searchButton" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </SearchContainer>
  );
}

export default Search;
