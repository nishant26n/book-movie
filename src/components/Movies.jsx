import React from "react";
import "./Home.css";

const Movies = ({ movieData, bookTicket }) => {
  return (
    <div className="card">
      {movieData.map((movie, i) => (
        <div>
          <div className="movie" key={i}>
            <img src={movie.img} alt="img" />
            <h2> {movie.name}</h2>
            <p>{movie.desc}</p>
            <button onClick={bookTicket}>Book Tickets</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
