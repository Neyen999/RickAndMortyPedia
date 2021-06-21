import React from 'react';
// import "../styles/Search.css"

export const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search">
      <input placeholder="Busca a tu personaje favorito" type="text" value={search} ref={searchInput} onChange={handleSearch} />
    </div>
  )
}
