import {createBrowserRouter} from "react-router-dom"
import { Suspense,lazy } from "react"
import Loader from "../components/Loader";

const Login  = lazy(()=>import ("../Pages/Login"));
const Signup = lazy(()=>import ("../Pages/Signup"));

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
}
])
export default routes;