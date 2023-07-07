import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState('');
  const [selectedSolution, setSelectedSolution] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSelectedQuery(searchWord);
    const newFilter = data.filter((value) => {
      return value.Query.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleOptionClick = (query) => {
    setSelectedQuery(query);
    setFilteredData([]);

    // Find the selected query in the data array and set the corresponding solution
    const selectedData = data.find((item) => item.Query === query);
    setSelectedSolution(selectedData?.Solution);
  };

  const clearSearch = () => {
    setSelectedQuery('');
    setFilteredData([]);
    setSelectedSolution('');
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Keyword"
          value={selectedQuery}
          onChange={handleFilter}
        />
        {selectedQuery && (
          <span className="close-icon" onClick={clearSearch}>
            X
          </span>
        )}
      </div>
      {filteredData.length > 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div
                className="dataItem"
                key={key}
                onClick={() => handleOptionClick(value.Query)}
              >
                <p>{value.Query}</p>
              </div>
            );
          })}
        </div>
      )}
      {selectedSolution && (
        <div className="selectedSolution">
          {Array.isArray(selectedSolution) ? (
            selectedSolution.map((step, index) => (
              <p key={index}>{step}</p>
            ))
          ) : (
            <p>{selectedSolution}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;



