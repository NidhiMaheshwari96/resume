import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { allRoutes } from "./Router";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const router = createBrowserRouter(allRoutes);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
