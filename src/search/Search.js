import "./search.css";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

export default function Search({
  setName,
  genderArray,
  setGender,
}) {
  return (
    <div className="section">
      <div>
        <div className="search">
          <div className="search-dropdown">
            <button className="search-dropdown-button">
              choose gender <BsChevronDown className="icon" />
            </button>
            <div className="search-dropdown-content">
              {genderArray.map((gender, index) => {
                return (
                  <a key={index} onClick={() => setGender(gender)}>
                    {gender}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <section className="search-section">
              <div className="search-section-container">
                <form>
                  <div className="search-section-container-form">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      className="search-section-container-form__name"
                      placeholder="Search for characters by name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div id="icon">
                <FiSearch />
              </div>
            </section>
            <div id="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
