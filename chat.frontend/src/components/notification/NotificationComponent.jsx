/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './NotificationComponent.scss';

const NotificationComponent = ({ receiveNewMessage }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNewMessage = (event) => {
      const { author, content } = event.detail;
      const notification = `${author}: ${content}`;
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    };

    document.addEventListener('newMessage', handleNewMessage);

    return () => {
      document.removeEventListener('newMessage', handleNewMessage);
    };
  }, []);

  return (
    <div className="notification-container">
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
    </div>
  );
};

export default NotificationComponent;
