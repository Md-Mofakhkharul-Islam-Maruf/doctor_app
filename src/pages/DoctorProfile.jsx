import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCurrentDay } from "../utils/getCurrentDay";
import toast from "react-hot-toast";
import { Loader, LoaderCircle } from "lucide-react";
const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch doctors data");
        }
        return response.json();
      })
      .then((data) => {
        const selectedDoctor = data.find((doc) => doc.regNo === id);
        setDoctor(selectedDoctor);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center gap-4">
        <LoaderCircle className="animate-spin text-primary" /> Loading...
      </div>
    );
  }

  if (!doctor) {
    return (
      <h1 className="text-2xl text-center mt-16 text-error font-bold">
        Doctor not found
      </h1>
    );
  }

  const {
    regNo,
    name,
    image,
    education,
    speciality,
    designation,
    workspace,
    availability,
    fee,
  } = doctor;

  const today = getCurrentDay();

  // handle booking
  const handleBooking = () => {
    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    // Check if the user has already booked this doctor
    const alreadyBooked = existingAppointments.some(
      (appointment) => appointment.regNo === regNo
    );

    if (alreadyBooked) {
      toast.error(`You have already booked an appointment with ${name}.`);
      return;
    }

    // Add the new booking to the existing appointments
    const updatedAppointments = [...existingAppointments, doctor];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    toast.success(`Successfully booked an appointment with ${name}.`);

    // Redirect to the booking page
    navigate("/my-bookings");
  };

  return (
    <div>
      {/* Doctors profile */}
      <section className="w-6xl mx-auto bg-white text-center px-14 py-16 rounded-2xl space-y-3">
        <h1 className="font-bold text-4xl">Doctor's Profile Details </h1>
        <p className="text-gray-600">
          All the doctors are life saver man. They comes by the law of Allah
          subahnahu wa ta'ala. They always try to rescue our life from danger.
          They are the great man in the world
        </p>
      </section>

      <section className="flex w-6xl mx-auto px-14 py-10 bg-white my-10 rounded-2xl gap-5">
        <div>
          <img src={image} alt="doctor" />
        </div>
        <div className="space-y-4 py-5">
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="text-gray-600">{education}</p>
          <p className="text-gray-600">
            {designation}, {speciality}
          </p>
          <p className="text-gray-600">Working at </p>
          <h4 className="font-bold text-md">{workspace}</h4>
          <p className="text-gray-600">Reg No: {regNo}</p>

          <div className="flex gap-5 items-center">
            <p className="font-bold">Availability</p>
            {availability.map((day, index) => (
              <p
                key={index}
                className="bg-orange-50 border-1 border-orange-400 px-4 py-2 rounded-3xl text-orange-500"
              >
                {day}
              </p>
            ))}
          </div>
          <p className="space-x-5">
            Consultant Fee:
            <span className="font-bold text-blue-600 ml-4">Taka: {fee}</span>
            <span className="text-gray-500">(incl.vat)</span>
            <span className="font-bold text-blue-600">Per consultant</span>
          </p>
        </div>
      </section>

      <section className="w-6xl mx-auto px-14 py-10 bg-white text-center space-y-5 rounded-2xl">
        <h1 className="font-bold text-2xl">Book an Appoinment</h1>
        <div className="flex justify-between border-1 border-dashed border-gray-500 p-2 rounded-md items-center">
          <p className="font-bold">Availability</p>
          <p
            className={`px-4 py-2 rounded-3xl ${
              availability.includes(today)
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {availability.includes(today)
              ? "Doctor Available Today"
              : "Doctor Not Available Today"}
          </p>
        </div>
        <p className="bg-orange-100 text-orange-400 rounded-md p-1">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        <button
          onClick={handleBooking}
          className="btn btn-primary font-bold text-white w-full rounded-3xl"
        >
          Book Appointment Now
        </button>
      </section>
    </div>
  );
};

export default DoctorProfile;
