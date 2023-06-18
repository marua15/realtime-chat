import "./app.scss";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
//import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Messages from "./pages/mssgs/Messages";
import Join from "./pages/join/Join";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },{
          path: "/mssg",
          element: <Messages />,
        },{
          path: "/Join",
          element: <Join />,
        },
        
        
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;