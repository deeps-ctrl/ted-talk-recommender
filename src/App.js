import React, { useState } from "react";
import "./styles.css";

const motivationTedTalk = [
  {
    name: "The Puzzle of Motivation",
    rating: "3/5"
  }
];

const buisnessTedTalk = [
  {
    name: "Start with why?",
    rating: "4.5/5"
  },
  {
    name: "The Power of Purpose",
    rating: "4/5"
  }
];

const psychologyTedTalk = [
  {
    name: "Positive Pshycology",
    rating: "3/5"
  },
  {
    name: "The Psychology Behind Personality",
    rating: "3/5"
  }
];

const tedTalkObj = {
  motivation: motivationTedTalk,
  buisness: buisnessTedTalk,
  psychology: psychologyTedTalk
};

export default function App() {
  const [genreList, setGenreItem] = useState([]);
  function genreHandler(choosenGenre) {
    const genreItems = tedTalkObj[choosenGenre];
    setGenreItem(genreItems);
  }
  return (
    <div className="App">
      <header>
        <h1>Amazing TED Talks</h1>
        <p>Checkout my favourite TED Talks. Select genre to get started</p>
      </header>

      <div className="genre-selector">
        {Object.keys(tedTalkObj).map((tedTalkGenre) => {
          return (
            <button
              key={tedTalkGenre}
              onClick={() => genreHandler(tedTalkGenre)}
              className="genre-btn"
            >
              {tedTalkGenre}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="list-items">
        {genreList.map((event) => {
          return (
            <ul className="genre-item">
              <li key={event.name}>{event.name}</li>
              <li key={event.rating}>{event.rating}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
