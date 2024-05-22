// src/Componentes/SearchBox.jsx
import React, { useState } from 'react';
import './Styles/SearchBox.css';

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar por ID, serie o nombre..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={handleKeyPress} // Escucha el evento onKeyUp
      />
    </div>
  );
}

export default SearchBox;
