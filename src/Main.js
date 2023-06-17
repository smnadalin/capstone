import { Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import HomePage from "./HomePage";
import { useReducer } from "react";

function Main() {
  function updateTimes(state, action) {
    // if (action.type === "test") {
    //   return ["17:00", "18:00", "19:00"];
    // }

    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function initialiseTimes() {
    const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return initialTimes;
  }

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initialiseTimes()
  );

  return (
    <Routes>
       <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/booking"
        element={
          <Booking
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
          />
        }
      ></Route>
    </Routes>
  );
}

export default Main;
