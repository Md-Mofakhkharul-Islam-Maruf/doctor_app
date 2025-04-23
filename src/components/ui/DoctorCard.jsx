import { Link } from "react-router";
import { getCurrentDay } from "../../utils/getCurrentDay";

const DoctorCard = ({ doctor }) => {
  const {
    regNo,
    name,
    image,
    education,
    speciality,
    experience,
    availability,
  } = doctor;

  const today = getCurrentDay();

  return (
    <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
      <figure className="px-5 pt-10">
        <img src={image} alt="doctor" className="rounded-xl " />
      </figure>
      <div className="card-body">
        <div className="flex justify-start gap-5">
          <h4
            className={`px-4 py-2 rounded-3xl ${
              availability.includes(today)
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {availability.includes(today) ? "Available" : "Not Available"}
          </h4>
          <h4 className="bg-blue-100 px-4 py-2 rounded-3xl text-blue-800">
            {experience}+ Years experience
          </h4>
        </div>

        <div className="text-start space-y-2">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-gray-500">
            {education} - {speciality}
          </p>
          <p className="text-gray-500">Reg No: {regNo}</p>
          <div className="card-actions">
            <Link to={`/doctors/${regNo}`} className="w-full">
              <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
