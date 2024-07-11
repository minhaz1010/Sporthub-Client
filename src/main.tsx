import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
// @ts-ignore
import {store} from "./redux/store.ts";
import {RouterProvider} from "react-router-dom";
// @ts-ignore
import router from "./routes/main.routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)