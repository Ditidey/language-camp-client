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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import UpdateClass from "../pages/InstructorPages/UpdateClass";
import Payment from "../pages/UserPages/Payment";
import PaymentHistory from "../pages/UserPages/PaymentHistory";
import Chat from "../pages/Home/Chat";
import PopularInstrSeeButton from "../pages/Home/PopularInstrSeeButton";

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
            },
            {
                path: '/chat',
                element: <Chat></Chat>
            },
            {
                path: '/see-classes/:id',
                element: <PopularInstrSeeButton></PopularInstrSeeButton>
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
                   element:  <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
                },
                {
                    path: 'class-manage',
                    element:  <AdminRoute><ClassManage></ClassManage></AdminRoute>
                },
                {
                    path: 'manage-user',
                    element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
                },
                // instructors routes
                {
                    path: 'teacher-profile',
                    element:  <InstructorRoute><ProfileInstructor></ProfileInstructor></InstructorRoute>
                },
                {
                    path: 'my-classes',
                    element:  <InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
                },
                {
                    path: 'class-add',
                    element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
                },
                {
                    path: 'update-class/:id',
                    element:<InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
                    // loader: ({params})=>fetch(`https://language-camp-server.vercel.app/classes/${params.id}`)
                },
                // students routes
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
                },
                {
                    path: 'payment/:id',
                    element: <Payment></Payment>
                },
                {
                    path: 'payment-history',
                    element: <PaymentHistory></PaymentHistory>
                }
        ]
    }
])

export default router;