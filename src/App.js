import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import logo from './logo.png';
import data from './Data.json';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="right_heading">Query Encounter</h1>
      </div>
      <h2 className="use">
        Enter the Keyword of the Query that you are facing in (Outlook, Teams, One Drive, word, Excel, )
      </h2>
      <div className="search-container">
        <SearchBar data={data} />
        <button className="search-button">Search</button> {/* Add the search button */}
      </div>
    </div>
  );
}

export default App;
