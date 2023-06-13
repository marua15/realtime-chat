import "./app.scss";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { HubConnectionBuilder , LogLevel } from "@microsoft/signalr";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Messages from "./pages/mssgs/Messages";
import Join from "./pages/join/Join";
import Lobby from "./components/lobby/Lobby";
import Chat from "./components/chat/Chat";


const App = () => {

  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5173/Chat")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages,{ user , message}]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", {user, room});
      setConnection(connection);

    } catch (e) {
      console.log(e);
    }
  }

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
        {!connection
          ?<Lobby joinRoom={joinRoom}/>
          :<Chat messages={messages}/>
        }
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