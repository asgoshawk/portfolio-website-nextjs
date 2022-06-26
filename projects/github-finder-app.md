---
title: 'Github Finder APP'
excerpt: "A React app displays user's profile using Github API."
tags: ['React', 'JavaScript', 'Tailwindcss', 'DaisyUI']
cover_image: '/images/projects/github-finder-web.png'
priority: 3
---

### Intro

This is a hand-on project of Udemy course ["React Front To Back 2022"](https://www.udemy.com/course/react-front-to-back-2022/) by Brad Traversy. This React app displays the github user's profile using Github API. Also, it is the first time using the **useContext** and **useReducer** to store the user data in the client.

Github repo [here](https://github.com/asgoshawk/RFTB-github-finder).

---

### Demo

![Demo](https://i.imgur.com/QRRhXcG.gif)

The live demo is also available [here](https://asgoshawk-github-finder.netlify.app/).

---

### Features & Technologies

- React
- Tailwind CSS
- Daisy UI
- Github API
- Responsive Web Design (RWD)

---

### Getting started

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/asgoshawk/RFTB-github-finder.git
$ cd RFTB-github-finder
$ npm install
```

Add a `.env` file in the root directory for enviromental variables:

```bash
$ touch .env
```

In the `.env`, two variables must be defined:

```
REACT_APP_GITHUB_URL=https://api.github.com
REACT_APP_GITHUB_TOKEN=<Add Your Github Token here without brackets>
```

And then start the app by running command:

```bash
$ npm start
```
