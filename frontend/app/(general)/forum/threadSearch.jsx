// ThreadSearch.js
import { useState } from 'react';

export default function ThreadSearch({ onSearch }) { 
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="flex justify-end">
      <input 
        type="text" 
        placeholder="Search" 
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
      />
      <button className="bg-blue-500 text-white px-3 py-2 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSearch}>Search</button>
    </div>
  );
}
