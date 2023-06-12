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
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import TotalStudents from "../pages/Dashboard/Instructor/TotalStudents/TotalStudents";
import Feedback from "../pages/Dashboard/Instructor/Feedback/Feedback";
import AdminRouts from "./AdminRouts";
import InstructorRouts from "./InstructorRouts";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import Payment from "../pages/Dashboard/Student/SelectedClass/Payment";




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
        path: 'user-home',
        element: <PrivetRouts><StudentHome></StudentHome></PrivetRouts>
      },
      {
        path: 'my-selected-class',
        element: <PrivetRouts><MySelectedClass></MySelectedClass></PrivetRouts>
      },
      {
        path: 'my-enrolled-class',
        element: <PrivetRouts><MyEnrolledClass></MyEnrolledClass></PrivetRouts>
      },
      {
        path: 'payment',
        element: <PrivetRouts><Payment></Payment></PrivetRouts>
      },

      // Admin routs
      {
        path: 'admin-home',
        element:<AdminRouts><AdminHome></AdminHome></AdminRouts>
      },
      {
        path: 'manage-classes',
        element:<AdminRouts><ManageClasses></ManageClasses></AdminRouts>
      },
      {
        path: 'manage-users',
        element:<AdminRouts><ManageUsers></ManageUsers></AdminRouts>
      },


      // Instructor routs
      {
        path: 'instructor-home',
        element:<InstructorRouts><InstructorHome></InstructorHome></InstructorRouts>
      },
      {
        path: 'add-class',
        element:<InstructorRouts><AddClass></AddClass></InstructorRouts>
      },
      {
        path: 'my-class',
        element:<InstructorRouts><MyClasses></MyClasses></InstructorRouts>
      },
      {
        path: 'total-enrolled-students',
        element:<InstructorRouts><TotalStudents></TotalStudents></InstructorRouts>
      },
      {
        path: 'feedback',
        element:<InstructorRouts><Feedback></Feedback></InstructorRouts>
      },









    ]

  },

]);


export default router;