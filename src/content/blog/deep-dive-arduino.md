---
title: "Deep dive into Arduino programming | From C++ to C to ASM"
description: "Today we're going to dive into low-level programming on the Arduino platform. And make the firmware 10 times smaller!"
pubDate: "June 09 2025"
image: /image/arduino.jpg
categories:
  - Embedded
  - Programming
tags:
  - Embedded
  - Arduino
  - C++
  - C 
  - Assembly
  - Hardware
badge: Arduino
---

## TL;DR
- Write pure Assembly and C code for Arduino
- Make the firmware 10 times smaller!
- Setup avr utils in your linux environment

## Get Started
Today we're going to dive into low-level programming on a platform like Arduino, and especially AVR.
Let's go all the way from vanilla C++ programming to low-level Assembly. 
And this will lead us to reduce our firmware by as much as 10 times.
It is already assumed that at least you are using Arduino IDE or PlatformIO.

I will use **Arduno Nano** and **Arduino Uno**

## Installing dependencies
To work with C and Assembly, we will need a special set of tools and libraries related to AVR. 
Here's how to install it:
```bash
sudo apt install gcc-avr binutils-avr avr-libc avrdude
```

## C++
We won't stay long here, I think everyone has used the basic Arduino Framework at least once. 
But in short:
```cpp
#include <Ardino.h>
void setup() 
{
    // initialize digital pin LED_BUILTIN as an output.
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
    digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(1000);                      // wait for a second
    digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
    delay(1000);                      // wait for a second
}
```
![image](https://github.com/user-attachments/assets/9b21f460-f188-4e9e-a66a-ba3bd997ebcc)
![image](https://github.com/user-attachments/assets/41e986f9-4277-4d4a-8219-f6a89300b6c8)
![image](https://github.com/user-attachments/assets/9155edd4-3019-4b29-90fb-8bb5039b4b3a)

