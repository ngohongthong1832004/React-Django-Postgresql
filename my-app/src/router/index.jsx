import {createBrowserRouter } from 'react-router-dom'

import ErrorPage from '../components/errorPage';
import TestRootPage from '../components/test';
// import TestRootPage from '../components/test';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement : <ErrorPage />
    },
    {
      path: "home",
      element: <TestRootPage />,
      children: [
        {
          path: "id/",
          element: <div>id children ne</div>,
        },
      ],
    },
    
]);