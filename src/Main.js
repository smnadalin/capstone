import { Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import HomePage from "./HomePage";

function Main() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
    </Routes>
  );
}

export default Main;
