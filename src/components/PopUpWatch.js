import React, { useState } from "react";

const PopUpWatch = (props) => {
  const [watch, setWatch] = useState([]);

  const handleClick = () => {
    props.toggle2();
  };

  const addWatchList = () => {
    if (!localStorage.getItem("watch")) {
      const movie = [];
      movie.push(props.info2);
      localStorage.setItem("watch", JSON.stringify(movie));
    } else {
      const movies = JSON.parse(localStorage.getItem("watch"));
      movies.push(props.info2);
      localStorage.setItem("watch", JSON.stringify(movies));
    }
    setWatch(JSON.parse(localStorage.getItem("watch")));
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span onClick={handleClick}>&times; </span>
        <p>Are you sure to add !</p>
        <button className="popup_btn" onClick={addWatchList}>
          Yes
        </button>
      </div>
    </div>
  );
};
export default PopUpWatch;
