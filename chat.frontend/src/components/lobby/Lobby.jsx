import React, { useState } from 'react';
import './Lobby.scss';

const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

  return (
    <form className="lobby"
      onSubmit={e => {
        e.preventDefault();
        joinRoom(user, room);
      }}
    >
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Room"
          value={room}
          onChange={e => setRoom(e.target.value)}
        />
      </div>
      <button
        className="btn btn-success"
        type="submit"
        disabled={!user || !room}
      >
        Join
      </button>
    </form>
  );
};

export default Lobby;
