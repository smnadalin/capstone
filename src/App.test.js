import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import Main from "./Main";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} />);
  const headingElement = screen.getByLabelText("Choose date:");
  expect(headingElement).toBeInTheDocument();
});
test("Invalid date creates error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const dateElement = document.querySelector("#res-date");
  fireEvent.change(dateElement, { target: { value: "2020-05-24" } });
  const errorMessage = screen.getByText("The date cannot be in the past");
  expect(errorMessage).toBeInTheDocument();
});
test("Invalid guest quantity creates error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const guestElement = document.querySelector("#guests");
  fireEvent.change(guestElement, { target: { value: 0 } });
  const errorMessage = screen.getByText("Must be between 1 and 10 guests");
  expect(errorMessage).toBeInTheDocument();
});
test("Invalid occasion creates error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const occasionElement = document.querySelector("#occasion");
  fireEvent.change(occasionElement, { target: { value: "Wedding" } });
  const errorMessage = screen.getByText(
    "Select an occasion from the drop down"
  );
  expect(errorMessage).toBeInTheDocument();
});
test("Invalid time creates error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const timeElement = document.querySelector("#res-time");
  fireEvent.change(timeElement, { target: { value: "12:00" } });
  const errorMessage = screen.getByText("The selected time is not available");
  expect(errorMessage).toBeInTheDocument();
});

test("Valid date creates no error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const dateElement = document.querySelector("#res-date");
  fireEvent.change(dateElement, { target: { value: "2025-05-24" } });
  const errorMessage = screen.queryByText("The date cannot be in the past");
  expect(errorMessage).toBeNull();
});
test("Valid guest quantity creates no error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const guestElement = document.querySelector("#guests");
  fireEvent.change(guestElement, { target: { value: 1 } });
  const errorMessage = screen.queryByText("Must be between 1 and 10 guests");
  expect(errorMessage).toBeNull();
});
test("Valid occasion creates no error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const occasionElement = document.querySelector("#occasion");
  fireEvent.change(occasionElement, { target: { value: "Birthday" } });
  const errorMessage = screen.queryByText(
    "Select an occasion from the drop down"
  );
  expect(errorMessage).toBeNull();
});
test("Valid time creates no error", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      setAvailableTimes={() => {
        return 0;
      }}
    />
  );
  const timeElement = document.querySelector("#res-time");
  fireEvent.change(timeElement, { target: { value: "17:00" } });
  const errorMessage = screen.queryByText("The selected time is not available");
  expect(errorMessage).toBeNull();
});

test("Validate initialise times provides an initial array, and update times with given date provides expected options", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const bookingLink = screen.getByRole("link", { key: "Reservations" });
  fireEvent.click(bookingLink);
  const timeElement = document.querySelector("#res-time");
  const options = timeElement.getElementsByTagName("option");
  expect(options.length).toBeGreaterThan(0);
  const dateElement = document.querySelector("#res-date");
  fireEvent.change(dateElement, { target: { value: "2023-06-30" } });
  const optionElement1 = screen.getByText("17:00");
  const optionElement2 = screen.getByText("17:30");
  const optionElement3 = screen.getByText("18:30");
  const optionElement4 = screen.getByText("20:00");
  const optionElement5 = screen.getByText("20:30");
  expect(optionElement1).toBeInTheDocument();
  expect(optionElement2).toBeInTheDocument();
  expect(optionElement3).toBeInTheDocument();
  expect(optionElement4).toBeInTheDocument();
  expect(optionElement5).toBeInTheDocument();
});
