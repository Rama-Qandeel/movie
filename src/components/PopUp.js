import React, { useState } from "react";

const PopUp = (props) => {
  const [favorite, setFavorite] = useState([]);
  const handleClick = () => {
    props.toggle();
  };

  const addFavorite = () => {
    
    if (!localStorage.getItem("favourites")) {
      const movie = [];
      movie.push(props.info);
      localStorage.setItem("favourites", JSON.stringify(movie));
    } else {
      const movies = JSON.parse(localStorage.getItem("favourites"));
      let foundMovie = [];
      movies.forEach((movie, i) => {
        if (movie.id === props.info.id) {
          return foundMovie.push(i);
        }
      });

      if (!foundMovie.length) {
        movies.push(props.info);
        localStorage.setItem("favourites", JSON.stringify(movies));
      }
    }
 
    setFavorite(JSON.parse(localStorage.getItem("favourites")));
    props.toggle();
  
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span onClick={handleClick}>&times; </span>
        <p>Are you sure to add !</p>
        <button className="popup_btn" onClick={addFavorite}>
          Yes
        </button>
      </div>
    </div>
  );
};
export default PopUp;
