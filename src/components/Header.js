import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let[numberFav,setNumberFav]=useState(0)
  let[numberWatch,setNumberWatch]=useState(0)

 
  useEffect(() => {
    if(localStorage.getItem("favourites")){
      setNumberFav(JSON.parse(localStorage.getItem("favourites")).length) 
     }
     if(localStorage.getItem("watch")){
      setNumberWatch(JSON.parse(localStorage.getItem("watch")).length )
     }
  });




  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <ul className="nav-links">
            <li>
              <Link to="/" className="btn-header">
                Home
              </Link>
            </li>
            <button>{numberWatch}</button>
            <li>
              <Link to="/watched" className="btn-header">
                Watch List
              </Link>
             
            </li>
           <button>{numberFav}</button>
            <li>
              <Link to="/favorite" className="btn-header">
                Favorite
              </Link>

            </li>
           
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
