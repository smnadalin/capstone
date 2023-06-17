import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} />);
  const headingElement = screen.getByLabelText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
test("Initialise component provides the correct output", () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const linkElement = screen.getByRole("link", { name: "Reservations" });
  fireEvent.click(linkElement);
  const bookingFormElement = screen.getByTestId("my-form");
  console.log(bookingFormElement.getAttribute("availableTimes"));

  expect(bookingFormElement).toHaveAttribute("availableTimes", [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
