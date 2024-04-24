import { initializeApp } from "firebase/app";
import { getToken, getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDQkWGz5xksiK3Jn6ILf1b26IRMsGq_gks",
  authDomain: "myapplication-55877.firebaseapp.com",
  projectId: "myapplication-55877",
  storageBucket: "myapplication-55877.appspot.com",
  messagingSenderId: "607489425460",
  appId: "1:607489425460:web:6469d5af1fa1822aa04a61",
  measurementId: "G-7EF12FJZ3S",
};

console.log("*** Firebase Config ***", firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const requestPermission = () => {
  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification User Permission Granted.");
      return getToken(messaging, {
        vapidKey:
          "BK7owv3oh3XufaKnUaXLrMcZw9WwNeR4f01uqaIiyaIGYM7LrcE7sK8FcR4D2Z4-7nX45uarEujWebX_t9COi_E",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("client token", currentToken);
          } else {
            console.log("failed to get registeration token");
          }
        })
        .catch((err) => {
          console.log("error occur while registering the token", err);
        });
    } else {
      console.log("User Permission Denied.");
    }
  });
};

requestPermission();


export function onMessageListener(callback) {
  return onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    callback(payload);
  });
}
