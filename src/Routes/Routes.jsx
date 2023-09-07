import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home";
import AllTask from "../Pages/AllTask/AllTask";


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
        path: "profile",
        element:<Profile></Profile>,
        
      },
      {
        path: "allTask",
        element:<AllTask></AllTask>,
        // loader: fetch('http://localhost:5000/tasks')
        
      },
     
  
    ],
  },
  
]);
