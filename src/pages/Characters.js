import React, {useState, useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Characters = (props) => {
  const { character } = props;

  const { underline } = useContext(ThemeContext)

  return (
    <div className="Character__item">
        <h2 className={underline}>{character.name}</h2>
        <img src={character.image} />
    </div>
  )
}
