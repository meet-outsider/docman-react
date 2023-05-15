import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import 'fontsource-roboto';
import { RouterProvider } from 'react-router-dom';
import { routes } from '@/config/routes';
import { Provider } from 'react-redux';
import store from '@/config/store';
import AlertDialog from '@/components/AlertDialog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={routes}></RouterProvider>
    <AlertDialog />
  </Provider>
);
