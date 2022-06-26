---
title: 'AQtiny Project'
excerpt: 'An IOT project of tiny air quality device using Raspberry Pi Pico.'
tags: ['Python', 'MircoPython', 'InfluxDB', 'Grafana', 'RP2040']
cover_image: '/images/projects/aqtiny-web.png'
priority: 1
---

### Intro

This is the personal side project to build a tiny version of air quality monitoring system called AQtiny. The device is based on **Raspberry Pi Pico** and the dashboard is built with **Grafana** and **InfluxDB Cloud**. This device is currently monitoring the indoor air quility (i.e., my room).

![Device](https://i.imgur.com/9xYZVKK.jpg)

### Device

In this project, BME280, SCD41, SGP40, and SPS30 are mounted on the PCB which is designed with **KitCAD** on the first try. The observables are shown below:

- BME280: Temperature, Humidity, Pressure
- SCD41: CO2 (Photoacoustic Effect)
- SGP40: VOC (Metal Oxide)
- SPS30: PM1, PM2.5, PM4, PM10 (Optical Particle Counter)

### Program

To communicate these sensors with Pico, the main script was written in **Micropython**. However, some libraries of sensors are not written in Micropython or some methods are not supported in Pico currently. The revision is needed to make it work.

Because the Pico can not connect to network, Raspberry Pi Zero 2 W is connected with it through USB and uploads data to InfluxDB Cloud after recieving it from Pico. The time series data is queried with **Flux** from InfluxDB Cloud and displayed on the dashboard with Grafana.

![Dashboard](https://i.imgur.com/5snFbzr.png)
