import React from "react";

const Movie = (props) => {
  console.log(props.data);
  const { title, poster_path, overview, vote_average } = props.data;

  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className="movie-over">
        <h3>overview : </h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
