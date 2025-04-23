import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import Container from "./Container";
const Navbar = () => {
  return (
    <Container className="flex items-center justify-between gap-4 py-4">
      <figure className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <h1 className="text-3xl font-bold">DocTalk</h1>
      </figure>
      <nav className="flex items-center gap-8 text-stone-700 font-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/my-bookings"}>My-Bookings</NavLink>
        <NavLink to={"/blogs"}>Blogs</NavLink>
        <NavLink to={"/doctor-profile/:id"}>Doctor Profile</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </nav>
      <div>
        <button className="btn btn-primary rounded-full px-6">Emergency</button>
      </div>
    </Container>
  );
};

export default Navbar;
