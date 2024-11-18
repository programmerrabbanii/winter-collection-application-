import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";

const router= createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donation",
                element:<Donation></Donation>,
                loader:()=> fetch ("/donations.json")
            },
            {
                path:"/help",
                element:<HowToHelp></HowToHelp>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
        
    }
])

export default router