import './App.css';
import movieData from './movies.json'
import { useState } from 'react';

function App() {
  
  return (
    <>
      <NavBar></NavBar>
    </>
  );
}

function NavBar() {
  let [loginStatus, setLoginStatus] = useState("Login")
  return (
    <>
      <h1>Assignment 1</h1>
      <button onClick={(evt) => {
        loginStatus === "Login" ? setLoginStatus("Logout") : setLoginStatus("Login")
      }}>{loginStatus}</button>
      <MovieList movies={movieData.movies}></MovieList>
    </>
  );
}

function MovieList({movies}) {
  return (
    <>
      <h2>Movie Ratings</h2>
      {movies.map( movie => <Movie movie={movie}></Movie>)}
    </>
  );
}

function Movie({movie}) {
  return (
    <>
      <p>{movie.name} ({movie.year}): {movie.rating} / 5</p>
    </>
  );
  
}



export default App;
