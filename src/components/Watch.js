import React, { useState, useEffect } from "react";

const Favorite = () => {
  const [watch, setWatch] = useState([]);

  const watchedMovie = (props) => {
    console.log('movie : ',props.target.id);
    
    let index = watch.findIndex((movie) => movie.id == props.target.id);
    // console.log('index',index);
    let listmovie = JSON.parse(localStorage.getItem("watch"));
    listmovie.splice(index, 1);
    setWatch(listmovie);
    localStorage.setItem("watch", JSON.stringify(listmovie));
  };

  useEffect(() => {
    setWatch(JSON.parse(localStorage.getItem("watch")));
  }, []);

  const movie = watch.map((movie) => (
    <div className="movie-fav">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button onClick={watchedMovie} id={movie.id}>
          {" "}
          Watched
        </button>
      </div>
    </div>
  ));
  return <div className="movie-container">{movie}</div>;
};

export default Favorite;
