import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/Signup/SignUp";
import SignIn from "../Pages/Signin/SignIn";
import Courses from "../Pages/Home/Courses/Courses";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },


    ]
  }


]);
