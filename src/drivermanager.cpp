#include "drivermanager.h"

#include "drivers/net/NetDriver.h"
#include "drivers/astro/AstroDriver.h"
#include "drivers/egret/EgretDriver.h"
#include "drivers/hid/HIDDriver.h"
#include "drivers/keyboard/KeyboardDriver.h"
#include "drivers/mdmini/MDMiniDriver.h"
#include "drivers/neogeo/NeoGeoDriver.h"
#include "drivers/pcengine/PCEngineDriver.h"
#include "drivers/psclassic/PSClassicDriver.h"
#include "drivers/ps3/PS3Driver.h"
#include "drivers/ps4/PS4Driver.h"
#include "drivers/switch/SwitchDriver.h"
#include "drivers/xbone/XBOneDriver.h"
#include "drivers/xboxog/XboxOriginalDriver.h"
#include "drivers/xinput/XInputDriver.h"

#include "usbhostmanager.h"

void DriverManager::setup(InputMode mode) {
    switch (mode) {
        case INPUT_MODE_PS3:
            driver = new XInputDriver('3');
            break;
        case INPUT_MODE_PS4:
            driver = new XInputDriver('4');
            break;
        case INPUT_MODE_SWITCH:
            driver = new XInputDriver('1');
            break;
        case INPUT_MODE_XINPUT:
            driver = new XInputDriver('2');
            break;
        default:
            return;
    }

    // Initialize our chosen driver
    driver->initialize();
    inputMode = mode;
}
