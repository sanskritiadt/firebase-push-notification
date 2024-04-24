import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { requestPermission, onMessageListener } from './firebase';

function Notification() {
  const [notification, setNotification] = useState({ title: '', body: '' });

  useEffect(() => {
    requestPermission();
    
    const unsubscribe = onMessageListener((payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body
      });
      toast.success(`${payload.notification.title}: ${payload.notification.body}`, {
        duration: 60000,
        position: 'top-center'
      });
      console.log('Message received. ', payload);
    });
    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <div>
      <Toaster />
      <div>
        {notification.title && <h4>{notification.title}</h4>}
        {notification.body && <p>{notification.body}</p>}
      </div>
    </div>
  );
}

export default Notification;
