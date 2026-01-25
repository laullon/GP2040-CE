/*
 * SPDX-License-Identifier: MIT
 * SPDX-FileCopyrightText: Copyright (c) 2026 Personal
 */

#ifndef PLAYER_BOARD_CONFIG_H_
#define PLAYER_BOARD_CONFIG_H_

#include "class/hid/hid.h"
#include "enums.pb.h"

#define BOARD_CONFIG_LABEL "Player"

// Main pin mapping Configuration
#define GPIO_PIN_02 GpioAction::BUTTON_PRESS_UP     // UP
#define GPIO_PIN_03 GpioAction::BUTTON_PRESS_DOWN   // DOWN
#define GPIO_PIN_04 GpioAction::BUTTON_PRESS_RIGHT  // RIGHT
#define GPIO_PIN_05 GpioAction::BUTTON_PRESS_LEFT   // LEFT

// Six face buttons: B1..B4 + R1 + R2
#define GPIO_PIN_06 GpioAction::BUTTON_PRESS_B1  // B1
#define GPIO_PIN_07 GpioAction::BUTTON_PRESS_B2  // B2
#define GPIO_PIN_10 GpioAction::BUTTON_PRESS_B3  // B3
#define GPIO_PIN_11 GpioAction::BUTTON_PRESS_B4  // B4
#define GPIO_PIN_12 GpioAction::BUTTON_PRESS_R1  // R1
#define GPIO_PIN_08 GpioAction::BUTTON_PRESS_R2  // R2

// Select / Start
#define GPIO_PIN_16 GpioAction::BUTTON_PRESS_S1  // S1 (Select)
#define GPIO_PIN_17 GpioAction::BUTTON_PRESS_S2  // S2 (Start)

// Mark remaining pins as assigned to addons by default
#define GPIO_PIN_00 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_01 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_13 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_14 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_15 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_18 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_19 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_20 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_21 GpioAction::ASSIGNED_TO_ADDON
#define GPIO_PIN_28 GpioAction::ASSIGNED_TO_ADDON

// Keyboard Mapping Configuration (defaults can be adjusted later via webconfig)
#define KEY_DPAD_UP HID_KEY_ARROW_UP
#define KEY_DPAD_DOWN HID_KEY_ARROW_DOWN
#define KEY_DPAD_RIGHT HID_KEY_ARROW_RIGHT
#define KEY_DPAD_LEFT HID_KEY_ARROW_LEFT
#define KEY_BUTTON_B1 HID_KEY_Z
#define KEY_BUTTON_B2 HID_KEY_X
#define KEY_BUTTON_R2 HID_KEY_S
#define KEY_BUTTON_L2 HID_KEY_V
#define KEY_BUTTON_B3 HID_KEY_C
#define KEY_BUTTON_B4 HID_KEY_V
#define KEY_BUTTON_R1 HID_KEY_A
#define KEY_BUTTON_L1 HID_KEY_C
#define KEY_BUTTON_S1 HID_KEY_5
#define KEY_BUTTON_S2 HID_KEY_1
#define KEY_BUTTON_L3 HID_KEY_EQUAL
#define KEY_BUTTON_R3 HID_KEY_MINUS
#define KEY_BUTTON_A1 HID_KEY_9
#define KEY_BUTTON_A2 HID_KEY_F2
#define KEY_BUTTON_FN -1

#define TURBO_ENABLED 0

#define BOARD_LEDS_PIN 28
#define LED_BRIGHTNESS_MAXIMUM 100
#define LED_BRIGHTNESS_STEPS 5

#define HAS_I2C_DISPLAY 0
#define BUTTON_LAYOUT BUTTON_LAYOUT_STICKLESS
#define BUTTON_LAYOUT_RIGHT BUTTON_LAYOUT_STICKLESSB

#endif
