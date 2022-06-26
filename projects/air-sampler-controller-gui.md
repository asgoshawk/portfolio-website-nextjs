---
title: 'Air Sampler Controller GUI'
excerpt: 'A GUI controller program for Raspberry Pi air sampler.'
tags: ['Tkinter', 'Python', 'RaspberryPi']
cover_image: '/images/projects/air-sampler.jpg'
priority: 2
---

### Intro

This is a project for air sampling in ACLab. This work includs the prototype device based on Raspberry Pi Zero W and its contorl script written in **Python**. For more infomation, please visit the link above.

Github repo [here](https://github.com/asgoshawk/air-sampler-controller).

### Device

The device contains two micro pumps which allow user to prepare two air samples either simultaneously or at different time. A motor driver controled by GPIO of Raspberry Pi regulates these two pumps. Moreover, a flow sensor was added to this device in order to check whether the total flow rate is correct or not.

![Device](https://i.imgur.com/GyctfqX.jpg)

---

### GUI Controller

The **Tkinter** based GUI controller provides two major functionalities: flow rate logger and pump task manager. In the pump panel, user can also trigger the pump manually and adjust the regulator to get target flow rate. After checking the flow rate, one can start air sampling by setting the task. Besides, a none GUI script is included in the repository for headless control and allows user to do background execution.

![GUI window](https://i.imgur.com/VzBa0tC.png)
