import React, { useState } from 'react';
import './Lobby.scss';

const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="fr">
    <form className="lobby"
      onSubmit={e => {
        e.preventDefault();
        joinRoom(user, room);
      }}
    >
      <div className="form-group">
        <h2>JOIN</h2>
        <br/><br/>
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <select
          className="form-control"
          value={room}
          onChange={e => setRoom(e.target.value)}
        >
          <option value="">Select a room</option>
          <option value="room1">Room 1</option>
          <option value="room2">Room 2</option>
          <option value="room3">Room 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button
        className="btn btn-success"
        type="submit"
        disabled={!user || !room}
      >
        Join
      </button>
      <br/>

    </form>
    
    <br/>
    
    </div>
  );
};

export default Lobby;
