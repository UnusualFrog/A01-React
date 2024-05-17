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
  //console.log(movies)
  //console.log(props.movies)
  return (
    <>
      <h2>Movie Ratings</h2>
      {movies.map( movie => <Movie movie={movie}></Movie>)}
    </>
  );
}

function Movie(props) {
  return (
    <>
      <p>{props.name} ({props.year}): {props.rating}</p>
    </>
  );
  
}



export default App;
