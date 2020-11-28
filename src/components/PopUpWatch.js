import React, { useState } from "react";

const PopUp = (props) => {
    const [watch, setWatch] = useState([]);


  const handleClick = () => {
    props.toggle();
  };

  const addWatchList = () => {
    if (!localStorage.getItem("watch")) {
      const movie = [];
      movie.push(props.info);
      localStorage.setItem("watch", JSON.stringify(movie));
    } else {
      const movies = JSON.parse(localStorage.getItem("watch"));
      movies.push(props.info);
      localStorage.setItem("watch", JSON.stringify(movies));
    }
    setWatch(JSON.parse(localStorage.getItem("watch")));
  };


  return (
    <div className="popup-box">
      <div className="box">
        <span onClick={handleClick}>&times; </span>
        <p>Are you sure!</p>
        <button className onClick={addWatchList}>
          Yes
        </button>
      </div>
    </div>
  );
};
export default PopUp;