import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  let [page, setPage] = useState(1);

  useEffect(() => {
    getmovie();
  }, []);

  const getmovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('data ',data);
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchMovie(e.target.value);
    if (searchMovie) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setMovies(data.results);
          } else {
            console.log("data.errors :", data.errors);
            getmovie();
          }
        });
    }
  };

  const loadMore = async () => {
    page += 2;
    setPage(page);
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('movie : ',[...movies,data.results]);
        setMovies([...movies, ...data.results]);
      });
  };

  const movie = movies.map((movie) => (
    <Link
      className="link"
      to={{
        pathname: "/info",
        state: movie,
      }}
      style={{ textDecoration: "none" }}
    >
      <Movie data={movie} />
    </Link>
  ));

  return (
    <div>
      <div className="search-container">
        <input
          className="search"
          type="search"
          placeholder="Search..."
          onChange={handleOnChange}
          value={searchMovie}
        />
      </div>
      <div className="movie-container">{movie}</div>
      <div className="load_btn">
        <button onClick={loadMore}> Load more ... </button>
      </div>
    </div>
  );
};

export default Home;
