import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    // The form and submit button are no longer needed for search-as-you-type
    <div className="w-full max-w-xl mx-auto mt-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* Search Icon */}
          <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="search"
          id="movie-search"
          className="block w-full p-4 pl-10 text-sm text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-700/50 focus:ring-purple-500 focus:border-purple-500"
          placeholder="Search through thousands of movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
