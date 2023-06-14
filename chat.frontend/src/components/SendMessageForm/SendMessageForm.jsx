import React, { useState } from 'react';
import './SendMessageForm.scss'
const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="send">

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="message..."
        value={message}
        onChange={handleChange}
      />
      <button type="submit" disabled={!message}>
        Send
      </button>
    </form>
    </div>
  );
};

export default SendMessageForm;
