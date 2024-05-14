import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies]= useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
     .then(res => res.json())
     .then(data => setMovies(data))
  }, [])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Home Page</h1>
        <NavBar/>
      </header>
      <main>
        {/* Info goes here! */}
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard title={movie.title} />
              {/* Link to Movie page with dynamic routing using movie id */}
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
