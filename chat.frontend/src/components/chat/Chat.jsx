import React from 'react';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import MessageContainer from '../MessageContainer/MessageContainer';
import ConnectedUsers from '../ConnectedUsers/ConnectedUsers';
import './Chat.scss';

const Chat = ({ messages, sendMessage, users, closeConnection }) => (
  <div className="chat">
    <div className="left">
        <div className="message-cont">
          <MessageContainer messages={messages} />
          <SendMessageForm sendMessage={sendMessage} />
       </div>
    </div>
    <div className="right">
      <br></br>
      <ConnectedUsers users={users} />
    </div>
    
    
  </div>
);

export default Chat;
