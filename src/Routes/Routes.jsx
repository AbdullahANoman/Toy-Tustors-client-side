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
import Details from "../Pages/Details/Details";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

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
                element:<AllToys></AllToys>,
                loader: ()=> fetch('http://localhost:5000/allToys')
            },
            {
                path:'/myToys',
                element:<PrivateRout><MyToys></MyToys></PrivateRout>
            },
            {
                path:'/addToys',
                element:<PrivateRout><AddToys></AddToys></PrivateRout>
            },
            {
                path:'/details/:id',
                element:<PrivateRout><Details></Details></PrivateRout>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path:'/update/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    }
])


export default router;