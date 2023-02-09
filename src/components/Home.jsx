import React from "react";
import "./Home.css";
import movieData from "./Data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const bookTicket = () => {
    let path = `/tickets`;
    navigate(path);
  };

  return (
    <>
      <div className="movie-container">
        <h2>Book Your Movie</h2>

        <div className="movie-cards">
          <div className="card">
            {movieData.map((movie, i) => (
              <div className="movie" key={i}>
                <img src={movie.img} alt="img" />
                <h2> {movie.name}</h2>
                <p>{movie.desc}</p>
                <button onClick={bookTicket}>Book Tickets</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
