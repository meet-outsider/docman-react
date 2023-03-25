import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/app/styles/index.css';
import 'fontsource-roboto';
import {RouterProvider} from "react-router-dom";
import {routes} from "@/config/routes";
import {Provider} from "react-redux";
import store from "@/app/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
    // </React.StrictMode>
);
