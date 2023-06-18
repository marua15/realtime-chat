/* eslint-disable react/prop-types */
import React from 'react';
import './ConnectedUsers.scss'

// eslint-disable-next-line react/prop-types
const ConnectedUsers = ({ users }) => <div className='user-list'>
    <h3>Connected Users</h3>
    {users.map((u, idx) => <h6 key={idx}>{u}</h6>)}
</div>

export default ConnectedUsers;