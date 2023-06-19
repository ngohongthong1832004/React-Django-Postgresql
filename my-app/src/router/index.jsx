import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/errorPage";
import HomeDefault from "../components/homeDefault";
import HomeSearch from "../components/homeSearch";
import HomeResult from "../components/homeResult";
import HomeWishlist from "../components/homeWishlist";
import HomeErrorSearch from "../components/homeErrorSearch";
import HomeProfile from "../components/homeProfile";
import HomeManager from "../components/homeManager";
import HomeManagerUser from "../components/homeManager/HomeManagerUser";
import HomeManagerAddUser from "../components/homeManager/HomeManagerAddFilm";
import HomeManagerUpdateUser from "../components/homeManager/HomeManagerUpdateFilm";
import HomeManagerDeleteUser from "../components/homeManager/HomeManagerDeleteFilm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeDefault />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <HomeSearch />,
    errorElement: <HomeErrorSearch />,
  },
  {
    path: "wishlist",
    element: <HomeWishlist />,
  },
  {
    path: "id/:slug",
    element: <HomeResult />,
  },
  {
    path: "manager/",
    element : <HomeManager />,
    exact : true,
    children: [
      {
        path: "user",
        element: <HomeManagerUser />,
      },
      {
        path: "add-film",
        element: <HomeManagerAddUser />,
      },
      {
        path: "update-film",
        element: <HomeManagerUpdateUser />,
      },
      {
        path: "delete-film",
        element: <HomeManagerDeleteUser />,
      },
    ]
  },
  {
    path: "profile",
    element : <HomeProfile />
  }
]);
