// Search.js
import { useState } from 'react';

export default function ThreadSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
