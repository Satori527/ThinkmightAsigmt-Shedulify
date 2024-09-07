import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import "./index.css";
import store from "./store/store.js";
//import authSlice from './store/authSlice.js';

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
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <>
                    {console.log("signupRoute")}
                    <Signup />
                </>
                
                
            ),
        },
        {
            path: "/profile",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Profile />
                </AuthLayout>
            ),
        },
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
