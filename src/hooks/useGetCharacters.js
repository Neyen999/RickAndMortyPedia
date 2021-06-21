import { useEffect, useState } from "react";

export const useGetCharacters = (url) => {
  const [characters, setCharacters] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(url);
      console.log("Respuesta de la APi", response)
      const data = await response.json();
      setCharacters(characters.concat(data.results));
    } catch (error) {
      console.log(error)
    }
  }, [url])
  return { characters }
}