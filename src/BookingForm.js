import { useState } from "react";

function BookingForm({ availableTimes, setAvailableTimes, submitForm }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [dateValid, setDateValid] = useState(false);
  const [guestsValid, setGuestsValid] = useState(true);
  const [resTimeValid, setResTimeValid] = useState(true);
  const [occasionValid, setOccasionValid] = useState(true);
  const [resDateTouched, setResDateTouched] = useState(false);
  const availableOccasions = ["Birthday", "Anniversary"];

  function handleSubmit(event) {
    event.preventDefault();
    if (dateValid && guestsValid && resTimeValid && occasionValid) {
      submitForm({
        date: resDate,
        time: resTime,
        guests: guests,
        occasion: occasion,
      });
    }
  }

  function checkDate(dateInput) {
    if (!resDateTouched) {
      setResDateTouched(true);
    }
    const today = new Date().setHours(0, 0, 0);
    if (dateInput < today) {
      setDateValid(false);
    } else {
      setDateValid(true);
    }
  }

  function checkGuests(guestsInput) {
    if (guestsInput > 0 && guestsInput <= 10) {
      setGuestsValid(true);
    } else {
      setGuestsValid(false);
    }
  }

  function checkResTime(timeInput) {
    if (availableTimes.find((e) => e === timeInput) === undefined) {
      setResTimeValid(false);
    } else {
      setResTimeValid(true);
    }
  }

  function checkOccasion(occasionInput) {
    if (availableOccasions.find((e) => e === occasionInput) === undefined) {
      setOccasionValid(false);
    } else {
      setOccasionValid(true);
    }
  }

  return (
    <>
      <h1 className="bookingFormHeader">Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date:</label>
        <input
          type="date"
          id="res-date"
          style={
            dateValid || !resDateTouched
              ? { borderColor: "black" }
              : { borderColor: "red" }
          }
          aria-label="Reservation date"
          onChange={(e) => {
            setResDate(e.target.value);
            setAvailableTimes({
              type: "update",
              data: new Date(e.target.value),
            });
            checkDate(new Date(e.target.value));
          }}
          value={resDate}
        />
        {!dateValid && resDateTouched ? (
          <p style={{ color: "red" }}>The date cannot be in the past</p>
        ) : null}
        <label htmlFor="res-time">Choose time:</label>
        <select
          id="res-time"
          aria-label="Reservation time"
          onChange={(e) => {
            setResTime(e.target.value);
            checkResTime(e.target.value);
          }}
          value={resTime}
          style={
            resTimeValid ? { borderColor: "black" } : { borderColor: "red" }
          }
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {!resTimeValid ? (
          <p style={{ color: "red" }}>The selected time is not available</p>
        ) : null}
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          aria-label="Number of guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          style={
            guestsValid ? { borderColor: "black" } : { borderColor: "red" }
          }
          onChange={(e) => {
            setGuests(e.target.value);
            checkGuests(e.target.value);
          }}
          value={guests}
        />
        {!guestsValid ? (
          <p style={{ color: "red" }}>Must be between 1 and 10 guests</p>
        ) : null}
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          aria-label="Occasion"
          onChange={(e) => {
            setOccasion(e.target.value);
            checkOccasion(e.target.value);
          }}
          value={occasion}
          style={
            occasionValid ? { borderColor: "black" } : { borderColor: "red" }
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {!occasionValid ? (
          <p style={{ color: "red" }}>Select an occasion from the drop down</p>
        ) : null}
        <input
          className="submitButton"
          type="submit"
          aria-label="Submit"
          value="Make your reservation"
          style={
            dateValid && guestsValid && resTimeValid && occasionValid
              ? {}
              : { backgroundColor: "gainsboro", color: "grey" }
          }
        />
      </form>
    </>
  );
}

export default BookingForm;
