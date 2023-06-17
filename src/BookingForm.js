import { useState } from "react";

function BookingForm() {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occassion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Guests: ${guests}, Date: ${resDate}, Time: ${resTime}, Occasion: ${occassion}`
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => setResDate(e.target.value)}
          value={resDate}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) => setResTime(e.target.value)}
          value={resTime}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuests(e.target.value)}
          value={guests}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          value={occassion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
