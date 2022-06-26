---
title: 'Support Desk Project'
excerpt: 'A full stack project with MERN framework including token authentication and Redux.'
tags: ['React', 'Redux', 'Express', 'MongoDB', 'JavaScript']
cover_image: '/images/projects/support-desk-web.png'
priority: 5
---

### Intro

This is a hand-on project of Udemy course ["React Front To Back 2022"](https://www.udemy.com/course/react-front-to-back-2022/) by Brad Traversy. This is the first full stack project using **MERN** framework. **Redux** is also implemented for client data storage. To build protected API routes, **JWT** was used to create authenication.

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

```
------------------------------------------------------------------
Normal Routes
------------------------------------------------------------------
[Method]    [Route]
GET         /                         Home page
GET         /login                    Login page
GET         /register                 Register page
GET*        /new-ticket               Page for creating new ticket
GET*        /tickets                  Page listing tickets
GET*        /ticket                   Page dsiplaying ticket
GET         /*                        Not found page

------------------------------------------------------------------
User API Routes
------------------------------------------------------------------
[Method]    [Route]
POST*       /api/users                Register
POST*       /api/users/login          Login
GET*        /api/users/me             Get user info

------------------------------------------------------------------
Ticket API Routes
------------------------------------------------------------------
[Method]    [Route]
GET*        /api/tickets              Get all the tickets
POST*       /api/tickets              Create a new ticket
GET*        /api/tickets/:id          Get specific ticket
DELETE*     /api/tickets/:id          Delete specific ticket
PUT*        /api/tickets/:id          Update specific ticket

-------------------------------------------------------------------
Note API Routes
-------------------------------------------------------------------
[Method]    [Route]
GET*        /api/tickets/:id/notes    Get all the notes
POST*       /api/tickets/:id/notes    Create a new notes

If method ends with *:
=> private in normal routes
=> protected in API routes
```

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
