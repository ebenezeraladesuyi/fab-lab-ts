/* eslint-disable react-refresh/only-export-components */
// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
import SigninLayout from "../layout/SigninLayout";
// import Signin from "../pages/auth/Signin";
import SignupLayout from "../layout/SignupLayout";
// import Signup from "../pages/auth/Signup";
// import HomeComp from "../pages/homePage/HomeComp";


const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
const Signup = lazy(() => import("../pages/auth/Signup"))
const Signin = lazy(() => import("../pages/auth/Signin"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/signin",
        element: <SigninLayout />,
        children: [
            {
                index: true,
                element: <Signin />
            }
        ]
    },
    {
        path: "/signup",
        element: <SignupLayout />,
        children: [
            {
                index: true,
                element: <Signup />
            }
        ]
    },
])
