import Homepage from "./Homepage";
import Login from "./Login";

export const allRoutes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
