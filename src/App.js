import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import movieData from './movies.json'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <NavBar></NavBar>
    </Container>
  );
}

function NavBar() {
  let [loginStatus, setLoginStatus] = useState("Login")
  return (
    <div class="text-center container bg-light p-3 my-3 border">
      <h1 >Assignment 1</h1>
      <Button variant="primary" onClick={(evt) => {
        loginStatus === "Login" ? setLoginStatus("Logout") : setLoginStatus("Login")
      }}>{loginStatus}</Button>
      <br></br>
      <br></br>
      <MovieList movies={movieData.movies}></MovieList>
    </div>
  );
}

function MovieList({movies}) {
  return (
    <div class="text-start">
      <h2>Movie Ratings</h2>
      {movies.map( movie => <Movie movie={movie}></Movie>)}
    </div>
  );
}

function Movie({movie}) {
  return (
    <div class="card  bg-light mb-3" style={{width: 18 + "rem", margin: 10 + "px", padding: 10 + "px"}}>
      <h5 class="card-title">{movie.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{movie.year}</h6>
      <p class="card-text">⭐ {movie.rating} / 5 </p>
    </div>
  );
  
}

export default App;
