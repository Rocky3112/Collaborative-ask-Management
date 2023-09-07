import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home";
import AllTask from "../Pages/AllTask/AllTask";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
        
      },
      {
        path: "allTask",
        element:<PrivateRoute><AllTask></AllTask></PrivateRoute>,
        // loader: fetch('http://localhost:5000/tasks')
        
      },
     
  
    ],
  },
  
]);
