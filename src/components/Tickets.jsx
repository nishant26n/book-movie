import { useParams } from "react-router-dom";
import "./Tickets.css";

const Tickets = () => {
  const { id } = useParams();
  console.log(id);

  const booked = (event) => {
    alert(`Succesfully booked Seat ${event.target.innerText} for ${id}`);
  };

  return (
    <div className="seat-container">
      <h2 className="seat-title">Select Your Seat</h2>

      <div className="seat-btn">
        <button onClick={booked}>1</button>
        <button onClick={booked}>2 </button>
        <button onClick={booked}>3 </button>
        <button onClick={booked}>4 </button>
        <button onClick={booked}>5 </button>
        <button onClick={booked}>6 </button>
        <button onClick={booked}>7 </button>
        <button onClick={booked}>8 </button>
        <button onClick={booked}>9 </button>
        <button onClick={booked}>10</button>
      </div>
    </div>
  );
};

export default Tickets;
