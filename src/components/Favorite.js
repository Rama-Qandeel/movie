import React, { useState, useEffect } from "react";

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  const deleteMovie = (props) => {
    // console.log('movie : ',props.target.id);

    let index = favorite.findIndex((movie) => movie.id == props.target.id);
    // console.log('index',index);
    let listmovie = JSON.parse(localStorage.getItem("favourites"));
    listmovie.splice(index, 1);
    setFavorite(listmovie);
    localStorage.setItem("favourites", JSON.stringify(listmovie));
  };

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("favourites")));
  }, []);

  const movie = favorite.map((movie) => (
    <div className="movie-fav">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button onClick={deleteMovie} id={movie.id}>
          {" "}
          Remove
        </button>
      </div>
    </div>
  ));
  return <div className="movie-container">{movie}</div>;
};

export default Favorite;
