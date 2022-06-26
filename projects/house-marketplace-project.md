---
title: 'House Marketplace Project'
excerpt: 'A React project using Firebase to store data and build authentication.'
tags: ['React', 'JavaScript', 'Firebase']
cover_image: '/images/projects/house-marketplace-web.png'
priority: 4
---

### Intro

This is a hand-on project of Udemy course ["React Front To Back 2022"](https://www.udemy.com/course/react-front-to-back-2022/) by Brad Traversy. In this project, **Firebase** was introduced for user data and authentication.

Live demo [here](https://house-marketplace-asgoshawk.vercel.app/).

Github repo [here](https://github.com/asgoshawk/RFTB-marketplace-project).

---

### Demo

---

### Features & Technologies

- React
- Firebase
- Leaflet
- User authentication (Login system)
- Responsive Web Design (RWD)

---

### Getting started

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/asgoshawk/RFTB-marketplace-project.git
$ cd RFTB-marketplace-project
$ npm install
```

Add a `.env` file in the root directory for enviromental variables:

```bash
$ touch .env
```

In the `.env`, three variables must be defined:

```
REACT_APP_API_KEY=<Your Firebase API Key>
REACT_APP_MESSAGING_SENDER_ID=<Your Sender ID>
REACT_APP_FIREBASE_APP_ID=<Your Firebase App ID>
```

Because this project use Firebase for data strorage and authetication, please build and configure your Firebase project first. For more configuration, please check `firebase.config.js` and setup other variables from your Firebase SDK.

Here is the rules for Firebase database:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Listings
    match /listings/{listing} {
        allow read;
        allow create: if request.auth != null && request.resource.data.imageUrls.size() < 7;
        allow update: if resource.data.userRef == request.auth.uid;
        allow delete: if resource.data.userRef == request.auth.uid;
    }

    // Users
    match /users/{user} {
    	allow read;
    	allow create;
    	allow update: if request.auth.uid == user
    }
  }
}
```

Also, the rules for storage:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if
      request.auth != null &&
      request.resource.size < 10 * 1024 * 1024 && //10MB
      request.resource.contentType.matches('image/.*')
    }
  }
}
```

After configuring things above, start the app by running command:

```bash
$ npm start
```
