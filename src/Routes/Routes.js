import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Hero from "../Component/Hero/Hero";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Hero/>
            }
        ]
    }
])