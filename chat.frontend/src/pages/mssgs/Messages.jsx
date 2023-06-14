/* eslint-disable no-unused-vars */
import React from 'react'
import './Messages.scss'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useState } from 'react';
import Chat from '../../components/chat/Chat';
import Lobby from '../../components/lobby/Lobby';



const Messages = () => {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
  

    
    const joinRoom = async (user, room) => {
      try {
        const connection = new HubConnectionBuilder()
          .withUrl("http://localhost:5000/chat")
          .configureLogging(LogLevel.Information)
          .build();
  
        connection.on("ReceiveMessage", (user, message) => {
          setMessages(messages => [...messages, { user, message }]);
        });
  
        connection.on("UsersInRoom", (users) => {
          setUsers(users);
        });
  
        connection.onclose(e => {
          setConnection();
          setMessages([]);
          setUsers([]);
        });
  
        await connection.start();
        await connection.invoke("JoinRoom", { user, room });
        setConnection(connection);
      } catch (e) {
        console.log(e);
      }
    }
  
    const sendMessage = async (message) => {
      try {
        await connection.invoke("SendMessage", message);
      } catch (e) {
        console.log(e);
      }
    }
  
    const closeConnection = async () => {
      try {
        await connection.stop();
      } catch (e) {
        console.log(e);
      }
    }
  
    return( <div className='log'>
      <hr className='line' />
      {!connection
        ? <Lobby joinRoom={joinRoom} />
        : <Chat  messages={messages} users={users} sendMessage={sendMessage} closeConnection={closeConnection} />}
    </div>
  
)}

export default Messages