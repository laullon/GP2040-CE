/*
 * PlayerDriver: Generic HID driver that identifies as Player 1 or Player 2
 */
#include "drivers/player/PlayerDriver.h"

#include "drivers/shared/driverhelper.h"
#include "storagemanager.h"

const uint16_t* PlayerDriver::get_descriptor_string_cb(uint8_t index, uint16_t langid) {
    // Use HIDDriver behavior but override product string (index 2) for Player label
    if (index == 2) {  // product string index
        uint32_t profile = Storage::getInstance().getGamepadOptions().profileNumber;
        const char* label = (profile == 2) ? "GP2040-CE Player 2" : "GP2040-CE Player 1";
        return getStringDescriptor(label, index);
    }

    // fall back to HIDDriver implementation
    return HIDDriver::get_descriptor_string_cb(index, langid);
}

const uint8_t* PlayerDriver::get_descriptor_device_cb() {
    // Override VID/PID per player so host can distinguish devices.
    // Use pid.codes community VID (0x1209) and two different PIDs for players.
    const uint16_t VID = 0x1209;
    const uint16_t PID_PLAYER1 = 0x5BF0;
    const uint16_t PID_PLAYER2 = 0x5BF1;

    uint32_t profile = Storage::getInstance().getGamepadOptions().profileNumber;
    uint16_t pid = (profile == 2) ? PID_PLAYER2 : PID_PLAYER1;

    static uint8_t modified_device_descriptor[18];
    memcpy(modified_device_descriptor, hid_device_descriptor, sizeof(modified_device_descriptor));
    memcpy(&modified_device_descriptor[8], (uint8_t*)&VID, sizeof(uint16_t));   // Vendor ID
    memcpy(&modified_device_descriptor[10], (uint8_t*)&pid, sizeof(uint16_t));  // Product ID
    return (const uint8_t*)modified_device_descriptor;
}
