import { Routes, Route, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import HomePage from "./HomePage";
import Menu from "./Menu";
import Contact from "./Contact";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./API/api";

function Main() {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initialiseTimes(new Date())
  );

  function initialiseTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(state, action) {
    if (action.type === "update") {
      return fetchAPI(action.data);
    }
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/booking/confirmed");
    }
  }

  return (
    <Routes>
       <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/booking"
        element={
          <Booking
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            submitForm={submitForm}
          />
        }
      ></Route>
      <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
    </Routes>
  );
}

export default Main;
