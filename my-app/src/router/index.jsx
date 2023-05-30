import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/errorPage";
import HomeDefault from "../components/homeDefault";
import HomeSearch from "../components/homeSearch";
import HomeWishlist from "../components/homeWishlist";
import HomeErrorSearch from "../components/homeErrorSearch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeDefault />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <HomeSearch />,
    errorElement : <HomeErrorSearch />,
    children: [
      {
        path: "id/",
        element: <div>id children ne</div>,
      },
    ],
  },
  {
    path: "wishlist",
    element: <HomeWishlist />,
  },
]);
