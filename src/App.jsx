import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PathUtils from "./pages/PathUtils";
import Logout from "./pages/Logout";

const AppLayout = React.lazy(() => import("./components/AppLayout"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Signin = React.lazy(() => import("./pages/Signin"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Search = React.lazy(() => import("./pages/Search"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Details = React.lazy(() => import("./pages/Details"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));



const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <AppLayout />,
    children: [
      { path: PathUtils.SIGNIN, element: <Signin /> },
      { path: PathUtils.SIGNUP, element: <Signup /> },
      { path: PathUtils.SEARCH, element: <Search /> },
      { path: PathUtils.CART, element: <Cart /> },
      { path: PathUtils.DASH, element: <Dashboard /> },
      { path: PathUtils.DETAILS, element: <Details />,
        children:[
          {path:PathUtils.PROFILE,element:<Profile/>},
          {path:PathUtils.ORDERS,element:<Orders/>},
          {path:PathUtils.LOGOUT,element:<Logout/>},
        ]
       },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
