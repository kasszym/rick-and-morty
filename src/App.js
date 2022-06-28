import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Pagination from "./pagination/Pagination";
import Navbar from "./navbar/Navbar";
import rick from "./rick.png";
import Search from "./search/Search";
import { convertParams } from "./utils/params";
import Characters from "./characters/Character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [index, setIndex] = useState(1);
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [genderArray, setGenderArray] = useState([
    "Male",
    "Female",
    "Genderless",
    "Unknown",
  ]);

  const [gender, setGender] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const fetchCharacters = async (index = 1, name, gender) => {
    const params = convertParams(index, name, gender);
    try {
      setLoading(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character${params}`
      );
      let data = await res.json();
      setLoading(false);
      if (res.status >= 400) throw new Error(data);
      setCharacters(data.results);
      setCount(data.info.count);
    } catch (err) {
      setCharacters([]);
      setCount(0);
    }
  };

  useEffect(() => {
    fetchCharacters(1, name, gender);
  }, [name, gender]);

  const handlePageClick = (event) => {
    fetchCharacters(event.selected + 1, name, gender);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div>
          <Search
            setName={setName}
            genderArray={genderArray}
            setGender={setGender}
          />
        </div>
        <div>
          <div className="display-characters">
            {loading ? (
              <div className="display-characters-l">Loading...</div>
            ) : count !== 0 ? (
              characters.map((val) => {
                return (
                  <div>
                    <Characters item={val} />
                  </div>
                );
              })
            ) : (
              <div className="display-characters-l">No results</div>
            )}
          </div>

          <div style={{ opacity: loading ? "0" : "1" }}>
            <Pagination
              characters={characters}
              index={index}
              count={count}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </div>
      <div className="background-image">
        <img src={rick} />
      </div>
    </div>
  );
}

export default App;
