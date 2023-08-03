import React from "react";
import { actors } from "../data";

function Actors() {

  const actorMap = actors.map(actor => {

    const moviesMap = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    });

    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <ul>
          Movies:
        {moviesMap}
        </ul>
      </div>
    );

  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorMap}
    </div>
  );
};

export default Actors;
