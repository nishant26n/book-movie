import React from "react";

const Tickets = () => {
  const booked = () => {
    alert("Succesfully booked!!");
  };
  return (
    <>
      <h2>Select Your Seat</h2>
      <div>
        <button onClick={booked}>1</button>
        <button onClick={booked}>2</button>
        <button onClick={booked}>3</button>
        <button onClick={booked}>4</button>
        <button onClick={booked}>5</button>
        <button onClick={booked}>6</button>
        <button onClick={booked}>7</button>
        <button onClick={booked}>8</button>
        <button onClick={booked}>9</button>
        <button onClick={booked}>10</button>
      </div>
    </>
  );
};

export default Tickets;
