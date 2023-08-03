import React from "react";
import { movies } from "../data";

function Movies() {

  const movieDeets = movies.map(movie => {

    const genresMap = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
    });

    return (
      <div key={movie.time}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>
          Genres:
          {genresMap}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDeets}
    </div>
  );
}

export default Movies;
