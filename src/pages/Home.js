import React from 'react'
import { useState, useCallback, useMemo, useRef, useContext } from 'react'
import { useGetCharacters } from '../hooks/useGetCharacters';
import { Link } from "react-router-dom";
import { Characters } from './Characters';
import { Search } from '../components/Search';
// import "../styles/Home.css"
import { ThemeContext } from '../context/ThemeContext';

export const Home = () => {
  const [nextPage, setNextPage] = useState(1);

  const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`;
  const { characters } = useGetCharacters(API);
  
  const searchInput = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, []);

  const { theme } = useContext(ThemeContext)

  const filteredUsers = useMemo(() => characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase())
    }), [characters, search]
  );

  return (
    <div className="container">
      <Search searchInput={searchInput} search={search} handleSearch={handleSearch}/>
      <div className={`Characters__container ${filteredUsers.length === 3 && "three-columns"} ${filteredUsers.length === 2 && "two-columns"} ${filteredUsers.length === 1 && "one-column"}`}>
      {
        filteredUsers.map((character) =>
        <Link className={theme} key={character.id} to={`/${character.id}`}>
          <Characters character={character}/>
        </Link>)
      }
      </div>

      {
        search === "" && <button className="load__more" type="button" onClick={() => setNextPage(nextPage + 1)}>Load More</button>
      }

    </div>
  )
}
