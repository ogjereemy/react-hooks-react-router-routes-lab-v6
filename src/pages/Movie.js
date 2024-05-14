import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie]= useState([])

  const {id} = useParams()
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${id}`)
     .then(res => res.json())
     .then(data => setMovie(data))
  }, [id])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>{movie.title}</h1>
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <p>Time: {movie.time}</p>
        
          {movie.genres?.map((genre) =>(
            <span>{genre}</span>
          ))}
          
        
      </main>
    </>
  );
};

export default Movie;
