import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import MyBookings from "../pages/MyBookings";
import DoctorProfile from "../pages/DoctorProfile";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "doctors/:id",
        element: <DoctorProfile />,
      },
    ],
  },
]);
