import React from "react";
import "./Movies.css";
import { Link } from "react-router-dom";

const Movies = ({ imgSrc, name, desc }) => {
  return (
    <div className="movie">
      <img src={imgSrc} alt="img" />
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className="ticket-btn">
        <Link
          className="book-ticket"
          to={{ pathname: `tickets/${name}`, state: { name } }}
        >
          <button>Book Tickets</button>
        </Link>
      </div>
    </div>
  );
};

export default Movies;
