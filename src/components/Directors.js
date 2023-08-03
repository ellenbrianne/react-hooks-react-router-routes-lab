import React from "react";
import { directors } from "../data";

function Directors() {

  const mapDirectors = directors.map(director => {

    const movieMap = director.movies.map(movie => <li key={movie}>{movie}</li>)

    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <ul>
          Movies:
            {movieMap}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {mapDirectors}
    </div>
  )
}

export default Directors;
