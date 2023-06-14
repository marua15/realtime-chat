import React, { useState } from 'react';

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
  );
};

export default SendMessageForm;
