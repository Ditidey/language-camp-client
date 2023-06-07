import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import DashLayout from "../layout/DashLayout";
import ProtectedRoute from "./ProtectedRoute";
import ClassManage from "../pages/AdminPages/ClassManage";
import ManageUser from "../pages/AdminPages/ManageUser";
import InstructorClasses from "../pages/InstructorPages/InstructorClasses";
import AddClass from "../pages/InstructorPages/AddClass";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dash',
        element:  <ProtectedRoute><DashLayout></DashLayout></ProtectedRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
                {
                    path: 'class-manage',
                    element: <ClassManage></ClassManage>
                },
                {
                    path: 'manage-user',
                    element:<ManageUser></ManageUser>
                },
                {
                    path: 'my-classes',
                    element: <InstructorClasses></InstructorClasses>
                },
                {
                    path: 'class-add',
                    element: <AddClass></AddClass>
                }
        ]
    }
])

export default router;