import { Link } from "react-router";
import Navbar from "../components/shared/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="text-center flex flex-col gap-4 justify-center items-center min-h-[90vh]">
        <h1 className="text-5xl font-bold">404</h1>
        <h3 className="text-xl font-medium">Oops! Page Not Found</h3>
        <Link to={"/"} className="btn btn-primary rounded-full">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default Error;
