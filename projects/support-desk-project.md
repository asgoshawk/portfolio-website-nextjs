---
title: 'Support Desk Project'
excerpt: 'A full stack project with MERN framework including token authentication and Redux.'
tags: ['React', 'Redux', 'Express', 'MongoDB', 'JavaScript']
cover_image: '/images/projects/support-desk-web.png'
priority: 5
---

### Intro

This is a hand-on project of Udemy course ["React Front To Back 2022"](https://www.udemy.com/course/react-front-to-back-2022/) by Brad Traversy.

Live demo [here](https://asgoshawksupportdesk.herokuapp.com/) (Takes some time to wake up the Heroku app).

Github repo [here](https://github.com/asgoshawk/RFTB-support-desk).

---

### Demo

---

### Features & Technologies

- React
- Redux
- Express / Node.js
- MongoDB
- RESTful API
- Authentication with Json Web Token (JWT)
- Protected routes

---

### Getting started

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/asgoshawk/RFTB-support-desk.git
$ cd RFTB-support-desk
$ npm install

# Don't forget the modules in the frontend directory
$ cd frontend
$ npm install

# Back to the root directory
$ cd ..
```

Add a `.env` file in the root directory for enviromental variables:

```bash
$ touch .env
```

In the `.env`, three variables must be defined:

```
NODE_ENV=development
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT SECRET>
```

And then start the app by running command:

```bash
# Use concurrently to run both frontend and backend
$ npm run dev
```
