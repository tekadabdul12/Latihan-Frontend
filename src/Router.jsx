import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Profile from "./profile";
import Login from "./login";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />

    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router