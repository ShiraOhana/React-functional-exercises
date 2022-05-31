import React, { useState, useEffect } from "react";
import axios from "axios";

function SimpleFetch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1");
      setMovies(data);
    };
    search();
  }, []);
  return (
    <div>
      <p>Movie's name: {movies.title}</p>
      <p>Director's name: {movies.director}</p>
      {/* {movies.map((item) => {
        return <div>{item.director}</div>;
      })} */}
    </div>
  );
}

export default SimpleFetch;
