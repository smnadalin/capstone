import { useState } from "react";

function BookingForm({ availableTimes, setAvailableTimes, submitForm }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  function handleSubmit(event) {
    event.preventDefault();
    submitForm({
      date: resDate,
      time: resTime,
      guests: guests,
      occasion: occasion,
    });
  }

  return (
    <>
      <form data-testid="my-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => {
            setResDate(e.target.value);
            console.log(e.target.value);
            setAvailableTimes({
              type: "update",
              data: new Date(e.target.value),
            });
          }}
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
          value={occasion}
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
