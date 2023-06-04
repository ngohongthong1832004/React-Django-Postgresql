import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/errorPage";
import HomeDefault from "../components/homeDefault";
import HomeSearch from "../components/homeSearch";
import HomeResult from "../components/homeResult";
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
  },
  {
    path: "wishlist",
    element: <HomeWishlist />,
  },
  {
    path: "id/:slug",
    element: <HomeResult />,
  }
]);
