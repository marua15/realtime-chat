/* eslint-disable react/prop-types */
import React from 'react';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import MessageContainer from '../MessageContainer/MessageContainer';
import ConnectedUsers from '../ConnectedUsers/ConnectedUsers';
import NotificationComponent from '../notification/NotificationComponent';

import './Chat.scss';
import { Button } from 'react-bootstrap';

const Chat = ({ messages, sendMessage, users, closeConnection }) => {
  return (
    <div className="chat">
      <div className="left">
        <div className="message-cont">
          <MessageContainer messages={messages} />
          <SendMessageForm sendMessage={sendMessage} />
        </div>
      </div>
      <div className="right">
        <br />
        <ConnectedUsers users={users} />
        <Button variant="danger" onClick={() => closeConnection()}>
          Logout
        </Button>
      </div>

      <NotificationComponent /> {/* No need to pass notifications as a prop */}
    </div>
  );
};

export default Chat;
