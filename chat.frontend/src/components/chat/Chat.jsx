
import React from 'react';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import MessageContainer from '../MessageContainer/MessageContainer';
import ConnectedUsers from '../ConnectedUsers/ConnectedUsers';
import { Button } from 'react-bootstrap';
const Chat =() => { ({ sendMessage, messages, users, closeConnection }) => <div>
    <div className='leave-room'>
        <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
    </div>
    <ConnectedUsers users={users} />
    <div className='chat'>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>
}
export default Chat;