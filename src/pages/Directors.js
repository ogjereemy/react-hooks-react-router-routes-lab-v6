import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors]= useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
     .then(res => res.json())
     .then(data => setDirectors(data))
  }, [])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Directors Page</h1>
        <NavBar/>
      </header>
      <main>
        {/* Director info here! */}
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
