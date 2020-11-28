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
      movies.push(props.info);
      localStorage.setItem("favourites", JSON.stringify(movies));
    }
    setFavorite(JSON.parse(localStorage.getItem("favourites")));
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span onClick={handleClick}>&times; </span>
        <p>Are you sure!</p>
        <button className onClick={addFavorite}>
          Yes
        </button>
      </div>
    </div>
  );
};
export default PopUp;
