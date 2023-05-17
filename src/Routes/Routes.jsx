import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/myToys',
                element:<PrivateRout><MyToys></MyToys></PrivateRout>
            },
            {
                path:'/addToys',
                element:<PrivateRout><AddToys></AddToys></PrivateRout>
            }
        ]
    }
])


export default router;