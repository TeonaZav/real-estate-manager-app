import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home, AddListing, Details } from "./pages";
import { Layout } from "./components";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="add-listing" element={<AddListing />} />
    <Route path="/:id" element={<Details />} />
  </Route>
);

const router = createBrowserRouter(routes);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
