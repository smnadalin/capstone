import BookingForm from "./BookingForm";

function Booking({ availableTimes, setAvailableTimes, submitForm }) {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
      />
    </>
  );
}

export default Booking;
