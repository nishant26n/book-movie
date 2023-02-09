import React from "react";
import "./Home.css";
import movieData from "./Data";
import { useNavigate } from "react-router-dom";
import Movies from "./Movies";

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
            <Movies movieData={movieData} bookTicket={bookTicket} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
