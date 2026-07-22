import Home from "./pages/Home";
import Layout from "./MainLayout.jsx/Layout";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Register from "./pages/Register";
import AuthLayout from "./MainLayout.jsx/AuthLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/main",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;