import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SplashScreen from "../pages/SplashScreen";
import Premium from "../pages/Premium";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import PasswordSuccess from "../pages/PasswordSuccess";
import AdminDashboard from "../pages/Dashboard";
import CreatePlaylist from "../pages/CreatePlaylist";
import Playlist from "../pages/Playlist";
import AllPlaylists from "../pages/Allplaylists";
import UploadSong from "../pages/Upload";
import GetAllUsers from "./../pages/GetAllUsers";
import GetAllSongs from "../pages/GetAllSongs";
import EmailVerification from "../pages/EmailVerification";
import RoleBasedRoutes from "./RoleBasedRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "premium",
            element: <Premium />,
          },
          {
            path: "createplaylist",
            element: <CreatePlaylist />,
          },
          {
            path: "allplaylists",
            element: <AllPlaylists />,
          },
          {
            path: "playlist",
            element: <Playlist />,
          },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <RoleBasedRoutes />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "upload",
        element: <UploadSong />,
      },
      {
        path: "songs",
        element: <GetAllSongs />,
      },
      {
        path: "users",
        element: <GetAllUsers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/verify_email",
    element: <EmailVerification />,
  },
  {
    path: "/passwordsuccess",
    element: <PasswordSuccess />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
]);
