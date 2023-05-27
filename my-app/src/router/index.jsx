import {createBrowserRouter } from 'react-router-dom'

import ErrorPage from '../components/errorPage';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement : <ErrorPage />
    },
    {
      path: "home",
      element: <h1>home</h1>,
      children: [
        {
          path: "id/",
          element: <div>id children ne</div>,
        },
      ],
    },
    
]);