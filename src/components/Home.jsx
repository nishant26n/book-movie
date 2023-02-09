import React from "react";
import "./Home.css";
import movieData from "./Data";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div className="movie-container">
        <h2 className="title-header">Book Your Show Now 🍿</h2>
        <div className="movie-cards">
          <div className="card">
            {movieData.map((movie, i) => (
              <Movies
                name={movie.name}
                desc={movie.desc}
                imgSrc={movie.img}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
