/*
 * PlayerDriver: Generic HID driver that identifies as Player 1 or Player 2
 */
#ifndef _PLAYER_DRIVER_H_
#define _PLAYER_DRIVER_H_

#include "drivers/hid/HIDDriver.h"

class PlayerDriver : public HIDDriver {
   public:
    PlayerDriver() {}
    virtual ~PlayerDriver() {}
    const uint16_t* get_descriptor_string_cb(uint8_t index, uint16_t langid) override;
    const uint8_t* get_descriptor_device_cb() override;
};

#endif
