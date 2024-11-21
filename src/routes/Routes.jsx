import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import DonationDetails from "../components/DonationDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/donation/:id",
        element: <Private><DonationDetails></DonationDetails>,</Private>,
        loader: async ({ params }) => {
          const response = await fetch("/donations.json");
          const data = await response.json();
          return data.find((donation) => donation.id === parseInt(params.id));
        },
      },
      { 
        path: "/help",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/dashboard",
        element: <Private> <Dashboard></Dashboard> </Private>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
