import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const getCharForId = (id) => {
  const [char, setChar] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setChar(data);
    } catch (error) {
      console.log(error.message)
    }
  }, [id])
  return char;  
}

export const Cards = () => {
  let location = useLocation();
  console.log(location)
  const getHash = window.location.href.split("/")[3];
  console.log(getHash)
  const character = getCharForId(getHash)
  console.log(character)
  const { origin } = character;

  const { border } = useContext(ThemeContext);

  return (
    <div className={`Character__card ${border}`}>
      <div className="Character__image">
        <img src={character.image}/>
      </div>
      <div className="Character__data">
      <h2>{character.name}</h2>
      <h3>Estado: {character.status}</h3>
      <h3>Especie: {character.species}</h3>
      <h3>Género: {character.gender}</h3>
      {
        origin ? <h3>Origen: {Object.values(origin)[0]}</h3> : null
      }
      </div>
    </div>
  )
}
