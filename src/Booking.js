import BookingForm from "./BookingForm";

function Booking({ availableTimes, setAvailableTimes }) {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
}

export default Booking;
