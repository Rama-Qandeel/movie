import React, { useState, useEffect } from "react";

const Watch = () => {
  const [watch, setWatch] = useState([]);

  const watchedMovie = (props) => {
    // console.log("movie : ", props.target.id);

    let index = watch.findIndex((movie) => movie.id == props.target.id);
    let listmovie = JSON.parse(localStorage.getItem("watch"));
    listmovie.splice(index, 1);
    setWatch(listmovie);
    localStorage.setItem("watch", JSON.stringify(listmovie));
  };

  useEffect(() => {
    setWatch(JSON.parse(localStorage.getItem("watch")));
  }, []);

  return (
    <div className="movie-container">
      {watch ? (
        watch.map((movie) => (
          <div className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <button
                className="btn-watched"
                onClick={watchedMovie}
                id={movie.id}
              >
                Watched
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text">No Movies to Watch</h2>
      )}
    </div>
  );
};

export default Watch;

