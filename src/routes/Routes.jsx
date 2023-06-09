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
import AdminProfile from "../pages/AdminPages/AdminProfile";
import ProfileInstructor from "../pages/InstructorPages/ProfileInstructor";
import SelectedClasses from "../pages/UserPages/SelectedClasses";
import EnrolledClasses from "../pages/UserPages/EnrolledClasses";
import UserPro from "../pages/UserPages/UserPro";

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
                   path: 'admin-profile',
                   element: <AdminProfile></AdminProfile>
                },
                {
                    path: 'class-manage',
                    element: <ClassManage></ClassManage>
                },
                {
                    path: 'manage-user',
                    element:<ManageUser></ManageUser>
                },
                {
                    path: 'teacher-profile',
                    element: <ProfileInstructor></ProfileInstructor>
                },
                {
                    path: 'my-classes',
                    element: <InstructorClasses></InstructorClasses>
                },
                {
                    path: 'class-add',
                    element: <AddClass></AddClass>
                },
                {
                    path: 'select-classes',
                    element: <SelectedClasses></SelectedClasses>
                },
                {
                    path: 'enroll-classes',
                    element: <EnrolledClasses></EnrolledClasses>
                },
                {
                    path: 'user-profile',
                    element: <UserPro></UserPro>
                }
        ]
    }
])

export default router;