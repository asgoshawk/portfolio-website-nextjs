---
title: 'Air Quality Box Project'
excerpt: 'An IOT project for air quality monitoring using Raspberry Pi.'
tags: ['Express', 'InfluxDB', 'JavaScript', 'Python', 'RaspberryPi']
cover_image: '/images/projects/aqb-inner.jpg'
priority: 0
---

Live demo [here](https://earthcup.as.ntu.edu.tw/history)

### Intro

This is a major project of ACLab which provides a low-cost, high time resolution, and protable air quality box (AQB) to monitor the weather elements, particulate matter (PM), CO2, CO, oxidizing gases and volatile organic compounds (VOCs).

![](https://i.imgur.com/zn5PZPK.jpg)

---

### Device

Shout out to [Will Whang](https://twitter.com/will_whang) here. Really appreciated that he designed the main board of AQB, provided the early version of Python script and other supports. Also, he upgraded the board with GPS module in the latest version of AQB which allows us to monitor air quality with spatial resolution. This board is powered by Raspberry Pi Zero W communicating with the sensors through I2C and SPI protocols. For remotely control in field study, the AQB connects the network with 4G network adapter and **OpenVPN** client.

![Device](https://i.imgur.com/0fpoHSi.jpg)

---

### Backend

The web application is built with **Express** / **Node.js** and held by **Nginx** in Ubuntu server. The SSL cerificate is obtained from **Let's Encrypt** to secure the website with HTTPS. To store real-time data, a docker version of **InfluxDB** was applied to this project which provides useful method to query the time serires data. The application also implements **API** routes for client querying the data.

Besides, a simple authentication using **Passport.js** was added for the route containing sensitive data (e.g. raw data with spatial resolution). User must log to the system to reach these data.

![Architecture](https://i.imgur.com/sICWUIJ.png)

---

### Frontend

The overall page is written using HTML, CSS, and Common JavaScript while **Plotly** library was introduced for data visulization. Also, the **RWD** and compatibility for mobile devices (e.g. iPad) were considered in the web design

![Time series](https://i.imgur.com/1sXXBA4.png)

---

### Other

To improve the deployment experience for field study, the rain cover of AQB was redesigned to make it easy to reorientate. The covers were designed using **Blender** and 3D-printed with PLA.

![Blender](https://i.imgur.com/BrdB4sH.png)
