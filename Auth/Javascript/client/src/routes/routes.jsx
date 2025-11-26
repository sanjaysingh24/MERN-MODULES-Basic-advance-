import {createBrowserRouter} from "react-router-dom"
import { Suspense,lazy } from "react"
import Loader from "../components/Loader";
//dynamically import components for code splitting
const Login  = lazy(()=>import ("../Pages/Login"));
const Signup = lazy(()=>import ("../Pages/Signup"));
const Dashboard = lazy(()=>import ("../Pages/Dashboard"))

// define routes using createBrowserRouter
const routes  = createBrowserRouter([
    {
        path:"/",
        element:<Suspense fallback={<div><Loader></Loader></div>}><Login/></Suspense>
    },
    {
    path:"/signup",
    element:<Suspense fallback={<div><Loader></Loader></div>}><Signup/></Suspense>
    },
    {path:"/login",
    element:<Suspense fallback={<div><Loader></Loader></div>}><Login/></Suspense>
},
{
    path:"/dashboard",
    element:<Suspense fallback={<div><Loader></Loader></div>}><Dashboard/></Suspense>
}
])
export default routes;