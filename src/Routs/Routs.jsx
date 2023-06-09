import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../pages/Home/Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/instructors";
import Dashboard from "../pages/Dashboard/Dashboard";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        },
        {
          path:'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'dashboard',
          element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);


  export default router;