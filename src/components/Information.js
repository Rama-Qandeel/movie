import React, { useState, useEffect } from "react";
import PopUp from "./PopUp";
import PopUpWatch from "./PopUpWatch";
const Information = (props) => {
  // console.log("props ", props.location.state);
  const [seen, setSeen] = useState(false);
  const [seen2, setSeen2] = useState(false);
  const [add, setAdd] = useState(true);
  const [btnWatch, setBtnWatch] = useState(true);
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
    popularity,
    original_language,
  } = props.location.state;
  const addfav = () => {
    const movies = JSON.parse(localStorage.getItem("favourites"));
    if(movies){
    let foundMovie = [];
    movies.forEach((movie, i) => {
      if (movie.id === props.location.state.id) {
        return foundMovie.push(i);
      }
    });

    if (!foundMovie.length) {
      setAdd(true);
    } else {
      setAdd(false);
    }}

  };

  const addWatch=()=>{
    const movieswatch = JSON.parse(localStorage.getItem("watch"));

    if(movieswatch){
      let foundMovieWatch = [];
      movieswatch.forEach((movies, i) => {
        if (movies.id === props.location.state.id) {
          return foundMovieWatch.push(i);
        }
      });
  
      if (!foundMovieWatch.length) {
        setBtnWatch(true);
      } else {
        setBtnWatch(false);
      }}
  }

  useEffect(() => {
    addfav();
    addWatch();
  });
  

  const togglePop = () => {
    setSeen(!seen);
  };
  const togglePop2 = () => {
    setSeen2(!seen2);
  };

  return (
    <div className="result">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      <div className="info">
        <p>
          <strong>Title : </strong> {title}
        </p>
        <div>
          <p>
            <strong>Original Language :</strong> {original_language}
          </p>
        </div>
        <div>
          <p>
            <strong>Overview : </strong>
            {overview}
          </p>
        </div>
        <div>
          <span>
            <strong> Popularity : </strong>
            {popularity}{" "}
          </span>
        </div>
        <div>
          <span>
            <strong> Vote Average :</strong> {vote_average}
          </span>
        </div>
        <div>
          <span>
            {" "}
            <strong>Vote Count:</strong> {vote_count}{" "}
          </span>
        </div>
        <div>
          <span>
            <strong> Release Date:</strong> {release_date}
          </span>
        </div>
        <div className="btn-fav">
          {add ? (
            <div onClick={togglePop}>
              <button className="btn-add"> Add to Favorite</button>
            </div>
          ) : null}

          {seen ? (
            <PopUp toggle={togglePop} info={props.location.state} />
          ) : null}
          {btnWatch ? (
            <div className="" onClick={togglePop2}>
              <button className="btn-add">Add to WatchList</button>
            </div>
          ) : null}

          {/* <div className="" onClick={togglePop2}>
            <button className="btn-add">Add to WatchList</button>
          </div> */}
          {seen2 ? (
            <PopUpWatch toggle2={togglePop2} info2={props.location.state} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Information;
