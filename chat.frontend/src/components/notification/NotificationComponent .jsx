import React, { useState } from 'react';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  const receiveMessage = (author, content) => {
    // Créez la notification avec les informations pertinentes
    const newNotification = {
      author,
      content,
      timestamp: new Date().getTime(), // Ajoutez un horodatage pour le tri des notifications
    };

    // Ajoutez la nouvelle notification à la liste des notifications
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.timestamp}>
          <strong>{notification.author}: </strong>
          {notification.content}
        </div>
      ))}
    </div>
  );
};

export default NotificationComponent;
