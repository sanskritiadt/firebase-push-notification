

# Firebase Push Notifications

Push Notifications With React And Firebase

How to receive push notifications

Push notifications are small pop-up messages sent to a user's device or web app that appear even when the app is not open. They can alert real-time updates or changes to their upcoming plans, bookings, deliveries, and other time-sensitive topics. 

So I'm interested how we can easily add receiving push notifications to our web app. In today's tutorial, I'm going to do it through [Firebase Cloud Messaging (FCM)](https://firebase.google.com/products/cloud-messaging?gclid=Cj0KCQjw4omaBhDqARIsADXULuXjc3usXl7wxVaW_mdNdiv6CLc5p_lCc7Atsz_V6Icjg62Atj5WLmkaAqmKEALw_wcB&gclsrc=aw.ds). It is a cross-platform messaging solution that lets you reliably send messages at no cost.

## Getting Started

1. Clone this repository
```
git clone
```
2. Install dependencies
```
npm install
```
3. Launch app
```
npm run start # for npm
```

or if you want to create

First, I’m going to create a new React project through the following lines of code:

```sh
npx create-react-app firebase-push-notifications
cd firebase-push-notifications
npm run start
```

Great, we’ve successfully created and launched our web app.
