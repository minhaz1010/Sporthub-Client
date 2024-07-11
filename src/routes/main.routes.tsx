import {createBrowserRouter} from "react-router-dom";
// @ts-ignore
import MainLayout from "../components/layout/MainLayout.tsx";
import App from "../App.tsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/home",
                element:<App></App>
            }
        ]
    }
])


export  default  router;