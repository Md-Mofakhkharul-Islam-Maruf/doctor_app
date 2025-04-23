import { useState } from "react";
import { Link } from "react-router";

const MyBookings = () => {
  const appointments = localStorage.getItem("appointments") || [];
  const parsedAppointments = JSON.parse(appointments);
  const [bookings, setBookings] = useState(parsedAppointments || []);

  // handle appointment cancellation
  const handleCancelAppointment = (regNo) => {
    const updatedAppointments = parsedAppointments.filter(
      (appointment) => appointment.regNo !== regNo
    );

    // Update localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setBookings(updatedAppointments);
  };

  return (
    <section className="w-6xl mx-auto  px-14 py-10 space-y-5">
      <div className=" space-y-2 p-5  text-center">
        <h1 className="text-3xl font-bold space-y-2">My Today Appointments</h1>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {bookings.length > 0 ? (
        <section className=" space-y-5">
          {bookings?.map((doctor) => (
            <div
              key={doctor?.regNo}
              className="bg-white rounded-2xl  px-10 py-6 space-y-5"
            >
              <p className="font-bold text-2xl">{doctor?.name}</p>
              <div className="flex justify-between border-b border-dashed mb-5">
                <p>
                  {doctor?.education} - {doctor?.speciality}
                </p>
                <p>Appoinment Fee: {doctor?.fee} Taka + Vat</p>
              </div>
              <button
                onClick={() => handleCancelAppointment(doctor?.regNo)}
                className="btn text-red-500 w-full border-1 border-red-500 rounded-3xl font-bold"
              >
                Cancel Appoinment
              </button>
            </div>
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 pt-16">
          <h1 className="text-xl text-stone-500">
            No appointments booked yet.
          </h1>
          <Link to={"/"} className="btn btn-primary rounded-full">
            Go Home
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyBookings;
