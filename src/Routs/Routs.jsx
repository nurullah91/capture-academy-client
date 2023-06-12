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
import Error from "../pages/Error/Error";
import PrivetRouts from "./PrivetRouts";
import MySelectedClass from "../pages/Dashboard/Student/SelectedClass/MySelectedClass";
import MyEnrolledClass from "../pages/Dashboard/Student/MyEnrolledClass/MyEnrolledClass";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
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
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      }
    ]
  },

  {
    path: 'dashboard',
    element: <PrivetRouts><Dashboard></Dashboard></PrivetRouts>,
    children: [
      {
        path: 'my-selected-class',
        element: <PrivetRouts><MySelectedClass></MySelectedClass></PrivetRouts>
      },
      {
        path: 'my-enrolled-class',
        element: <PrivetRouts><MyEnrolledClass></MyEnrolledClass></PrivetRouts>
      }
    ]

  },

]);


export default router;