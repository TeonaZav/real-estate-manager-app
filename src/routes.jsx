import { Suspense, lazy } from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout, Loader } from "./components";

const Home = lazy(() => import("./pages/Home"));
const AddListing = lazy(() => import("./pages/AddListing"));
const Details = lazy(() => import("./pages/Details"));

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="add-listing"
      element={
        <Suspense fallback={<Loader />}>
          <AddListing />
        </Suspense>
      }
    />
    <Route
      path=":id"
      element={
        <Suspense fallback={<Loader />}>
          <Details />
        </Suspense>
      }
    />
  </Route>
);

const router = createBrowserRouter(routes);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
