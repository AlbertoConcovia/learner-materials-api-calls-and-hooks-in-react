import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CharacterContainer from "./components/CharacterContainer";
import Navigation from "./components/Navigation";
import axios from "axios";

export const FavouritesContext = React.createContext();

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [characterFavourites, setCharacterFavourites] = useState([]);
  const [currentStateButton, setCurrenStateButton] = useState("ShowAll");

  const getCharacters = async (pageNumber) => {
    const apiResponse = await axios.get(
      `http://api.disneyapi.dev/characters?page=${pageNumber}`
    );
    setCharacters(apiResponse.data.data);
  };

  const getFavouritesCharacters = () => {
    setCharacters(characterFavourites);
  };

  useEffect(() => {
    currentStateButton === "ShowAll"
      ? getCharacters(currentPage)
      : getFavouritesCharacters();
  }, [currentPage, currentStateButton]);

  return (
    <FavouritesContext.Provider
      value={{ characterFavourites, setCharacterFavourites }}
    >
      <div className="page">
        <Header currentPage={currentPage} />
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentStateButton={currentStateButton}
          setCurrenStateButton={setCurrenStateButton}
        />
        <CharacterContainer characters={characters} />
      </div>
    </FavouritesContext.Provider>
  );
}

export default App;
