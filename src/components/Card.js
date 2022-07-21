import React from "react";
import MovieDetails from "./MovieDetails";
import {useNavigate} from "react-router-dom";


const Card = ({ movie }) => {

  const navigate = useNavigate();

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.movies = newData;
  };

  const openMovie = (movieID) => {
    <MovieDetails movieID = {movie.id}/>
    navigate('/moviedetails/');
  };

  return (
    <div className="card">
      <img onClick={() => openMovie(movie.id)}
       src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/poster.png"
        }
        alt="movie poster"
      />
      <h2>{movie.title}</h2>
      {movie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          + Watchlist
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Retirer
        </div>
      )}
    </div>
  );
};

export default Card;
