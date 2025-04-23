import { useEffect } from "react";
import image from "../assets/banner-img-1.png";
import icon from "../assets/success-review.png";
import { useState } from "react";
import DoctorCard from "../components/ui/DoctorCard";
const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch doctors data");
        }
        return response.json();
      })
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);

  return (
    <div>
      <section className="w-7xl mx-auto text-center my-5 space-y-3 border-3 border-white p-10 rounded-3xl shadow-sm bg-linear-to-b from-gray-100 to-white ">
        <h1 className="text-4xl font-bold">
          Dependable Care, Backed by Trusted <br />
          Professionals.
        </h1>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="flex gap-5 justify-center">
          <label className="input rounded-3xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="px-10"
              required
              placeholder="Search any doctor...."
            />
          </label>
          <button className="btn btn-primary rounded-3xl text-white">
            Search Now
          </button>
        </div>

        <div className="flex gap-10 my-10">
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </section>

      <section className="w-7xl mx-auto text-center my-5 p-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Our Best Doctor</h1>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        <section className="my-10 grid grid-cols-3 gap-5">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor?.regNo} doctor={doctor} />
          ))}
        </section>

        {!showAll && (
          <button
            className="btn btn-primary text-white font-bold rounded-3xl px-10"
            onClick={() => setShowAll(true)}
          >
            View All Doctors
          </button>
        )}
      </section>

      <div className="w-7xl mx-auto text-center my-5 space-y-5 ">
        <div>
          <h2 className="font-bold text-2xl">
            We Provide Best Medical Services
          </h2>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.{" "}
          </p>
        </div>
      </div>
      <div className="w-13/15 mx-auto text-center my-5 flex justify-between gap-5">
        <div className="w-[300px] bg-white px-10 py-10 rounded-2xl">
          <img src={icon} alt="" />
          <h2 className="font-bold text-3xl text-start">199+</h2>
          <p className="text-start">Total Doctor</p>
        </div>
        <div className="w-[300px] bg-white px-10 py-10 rounded-2xl">
          <img src={icon} alt="" />
          <h2 className="font-bold text-3xl text-start">199+</h2>
          <p className="text-start">Total Doctor</p>
        </div>
        <div className="w-[300px] bg-white px-10 py-10 rounded-2xl">
          <img src={icon} alt="" />
          <h2 className="font-bold text-3xl text-start">199+</h2>
          <p className="text-start">Total Doctor</p>
        </div>
        <div className="w-[300px] bg-white px-10 py-10 rounded-2xl">
          <img src={icon} alt="" />
          <h2 className="font-bold text-3xl text-start">199+</h2>
          <p className="text-start">Total Doctor</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
