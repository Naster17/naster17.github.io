---
title: "Running linux on ESP32 with 4MB Flash"
description: "Today I'm going to show you how to run Linux on ESP32 with just only 4MB flash memory"
pubDate: "August 03 2025"
image: /image/esp32-linux.jpg
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
  - Linux
badge: Linux
---
## Get Started
Download these packages:
```bash 
apt install autoconf automake bash bc bison build-essential cmake flex gawk git gperf help2man libncurses-dev libtool libtool-bin libusb-1.0-0 python3 python3-venv rsync texinfo unzip wget cpio
```

## Get dynconfig
```bash
git clone https://github.com/jcmvbkbc/xtensa-dynconfig -b original
wget https://github.com/jcmvbkbc/xtensa-toolchain-build/raw/e46089b8418f27ecd895881f071aa192dd7f42b5/overlays/original/esp32.tar.gz
mkdir esp32 && tar -xf esp32.tar.gz -C esp32
sed -i 's/\(XSHAL_ABI\s\+\)XTHAL_ABI_WINDOWED/\1XTHAL_ABI_CALL0/' esp32/{binutils,gcc}/xtensa-config.h
make -C xtensa-dynconfig ORIG=1 CONF_DIR=`pwd` esp32.so
```
Dont forget to set exports every new shell sessions or add to your shell config file
```bash
export XTENSA_GNU_CONFIG=`pwd`/xtensa-dynconfig/esp32.so
```

## Get Toolchain
```bash
git clone https://github.com/jcmvbkbc/crosstool-NG.git -b xtensa-fdpic
cd crosstool-NG
./bootstrap && ./configure --enable-local && make
./ct-ng xtensa-esp32-linux-uclibcfdpic
CT_PREFIX=`pwd`/builds nice ./ct-ng build
cd ..
```
Now you can check your toolchain set in **crosstool-NG/builds/xtensa-esp32-linux-uclibcfdpic/bin/**

## Kernel and Rootfs
For pure ESP32 (4MB) we are using **xtensa-2024.05-fdpic** version
```bash
git clone https://github.com/jcmvbkbc/buildroot -b xtensa-2024.05-fdpic 
```
Time to create buildroot
```bash
make -C buildroot O=`pwd`/build-buildroot-esp32 esp32_defconfig
buildroot/utils/config --file build-buildroot-esp32/.config --set-str TOOLCHAIN_EXTERNAL_PATH `pwd`/crosstool-NG/builds/xtensa-esp32-linux-uclibcfdpic
buildroot/utils/config --file build-buildroot-esp32/.config --set-str TOOLCHAIN_EXTERNAL_PREFIX '$(ARCH)-esp32-linux-uclibcfdpic'
buildroot/utils/config --file build-buildroot-esp32/.config --set-str TOOLCHAIN_EXTERNAL_CUSTOM_PREFIX '$(ARCH)-esp32-linux-uclibcfdpic'
nice make -C buildroot O=`pwd`/build-buildroot-esp32
```

## Bootloader
```bash
git clone https://github.com/jcmvbkbc/esp-idf -b linux-5.1.2
pushd esp-idf
. ./export.sh
cd examples/get-started/linux_boot
idf.py set-target esp32
cp sdkconfig.defaults.esp32 sdkconfig
idf.py build
```
Flash
```bash
idf.py flash
```

## Final Flash
```bash
parttool.py $SET_BAUDRATE write_partition --partition-name linux  --input build-buildroot-esp32/images/xipImage
parttool.py $SET_BAUDRATE write_partition --partition-name rootfs --input build-buildroot-esp32/images/rootfs.cramfs
```
Connect (dont forget to add user in diagout group):
```bash
apt install minicom
minicom -b 115200 -D /dev/ttyUSB0
```

## End
Thank you for reading this rather short article. I tried to describe everything to the point.  
I also wanted to give a thank you to the author who ported Linux to the xtensa platform specialy ESP.  
His github: https://github.com/jcmvbkbc/  
His scripts to automate build: https://github.com/jcmvbkbc/esp32-linux-build  
  
