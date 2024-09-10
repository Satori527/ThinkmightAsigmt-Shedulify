import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import "./index.css";
import store from "./store/store.js";

//import authSlice from './store/authSlice.js';

import Availability from './components/Profile/Availability.jsx';
import Dashboard from './components/Profile/Dashboard.jsx';
import Events from './components/Profile/Events.jsx';
import User from './components/Profile/User.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element:<Login />
                
        },
        {
            path: "/signup",
            element:<Signup />
                
        },
        // {
        //     path: "/signup",
        //     element: (
        //         <AuthLayout>
        //             <Signup />
        //         </AuthLayout>
                
                
        //     ),
        // },
        {
            path: "/profile",
            element: <Profile/>

        },
        {
            path: "/profile/events",
            element: <Events/>
        },
        {
            path: "/profile/availability",
            element: <Availability/>
        },
        {
            path: "/profile/dashboard",
            element: <Dashboard/>
        },
        {
            path: "/profile/dashboard/user",
            element: <User/>
        }

    ],
},
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
)
