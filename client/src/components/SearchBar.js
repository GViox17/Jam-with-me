import React from 'react'
function SearchBar({searchForm, handleChange}) {
    return (
        <div className="searchbar">
              <input
                type="text"
                placeholder="Search by Instrument"
                onChange={handleChange}
                value={searchForm} 
            />
        </div>
    )
}

export default SearchBar
