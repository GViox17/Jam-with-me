import React from 'react'

function SearchBar() {
    return (
        <div className="searchbar">
              <input
                type="text"
                placeholder="Search by Instrument"
                // onChange={handleChange}
                // value={searchForm} searchForm, handleChange
            />
        </div>
    )
}

export default SearchBar
