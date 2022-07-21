import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("spiderman");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=2005cf20cc76ab57182960fb7c3b54c1&query=${search}`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Search for movie/show"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="result">
        {moviesData
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
