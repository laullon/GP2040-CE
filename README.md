<p align="center">
  <a href="https://gp2040-ce.info">
    <img alt="GP2040-CE" src="https://raw.githubusercontent.com/OpenStickCommunity/Site/main/docs/assets/images/gp2040-ce-logo.png" />
  </a>
</p>

<p align="center">
  Multi-Platform Gamepad Firmware for RP2040
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/OpenStickCommunity/GP2040-CE" />
  <img src="https://img.shields.io/github/actions/workflow/status/OpenStickCommunity/GP2040-CE/cmake.yml" />
  <br />
  <img src="https://img.shields.io/badge/inputlag.science-0.86%20ms-blue" />
  <img src="https://img.shields.io/badge/MiSTer%20latency-0.765%20ms-blue" />
</p>

<p>
  GP2040-CE (Community Edition) is a gamepad firmware for the Raspberry Pi Pico and other boards based on the RP2040 microcontrollers that combines multi-platform compatibility, low latency and a rich feature set to provide endless customization possibilities without sacrificing performance.
</p>

<p>
  GP2040-CE is compatible with PC, PS3, PS4, PS5, Nintendo Switch, Xbox One, Steam Deck, MiSTer and Android.
</p>

## Links

[Downloads](https://gp2040-ce.info/downloads) | [Installation](https://gp2040-ce.info/installation) | [Wiring](https://gp2040-ce.info/controller-build/wiring) | [Usage](https://gp2040-ce.info/usage) | [FAQ](https://gp2040-ce.info/faq/faq-general) | [GitHub](https://github.com/OpenStickCommunity/GP2040-CE)

Full documentation can be found at [https://gp2040-ce.info](https://gp2040-ce.info)

## Features

- Select from 14 input modes including X-Input, Nintendo Switch, Playstation 4/5, Xbox One, D-Input, and Keyboard
- Input latency average of 0.76ms in Xinput and 0.91ms for Playstation 5.
- Multiple SOCD cleaning modes - Up Priority (a.k.a. Stickless), Neutral, and Second Input Priority.
- Left and Right stick emulation via D-pad inputs as well as dedicated toggle switches.
- Dual direction via D-pad + LS/RS.
- Reversed input via a button.
- [Turbo and Turbo LED](https://gp2040-ce.info/add-ons/turbo) with selectable speed
- Per-button RGB LED support.
- PWM Player indicator LED support (XInput only).
- Multiple LED profiles support.
- Support for 128x64 monochrome I2C displays - SSD1306, SH1106, and SH1107 compatible.
- Custom startup splash screen and easy image upload via web configuration.
- Support for passive buzzer speaker (3v or 5v).
- [Built-in, embedded web configuration](https://gp2040-ce.info/web-configurator) - No download required!

Visit the [GP2040-CE Usage](https://gp2040-ce.info/usage) page for more details.

## Performance

Input latency is tested using the methodology outlined at [WydD's inputlag.science website](https://inputlag.science/controller/methodology), using the default 1000 Hz (1 ms) polling rate in the firmware. You can read more about the setup we use to conduct latency testing [HERE](https://github.com/OpenStickCommunity/Site/blob/main/latency_testing/README.md) if you are interested in testing for yourself or would just like to know more about the devices used to do the testing.

| Version | Mode    | Poll Rate | Min     | Max     | Avg     | Stdev   | % on time | %1f skip | %2f skip |
| ------- | ------- | --------- | ------- | ------- | ------- | ------- | --------- | -------- | -------- |
| v0.7.12 | Xinput  | 1 ms      | 0.45 ms | 1.28 ms | 0.76 ms | 0.24 ms | 98.48%    | 1.52%    | 0%       |
| v0.7.12 | Switch  | 1 ms      | 0.41 ms | 1.22 ms | 0.72 ms | 0.24 ms | 98.53%    | 1.47%    | 0%       |
| v0.7.12 | HID USB | 1 ms      | 0.42 ms | 1.25 ms | 0.73 ms | 0.24 ms | 98.52%    | 1.48%    | 0%       |
| v0.7.12 | PS3     | 1 ms      | 0.52 ms | 1.46 ms | 0.83 ms | 0.24 ms | 98.37%    | 1.63%    | 0%       |
| v0.7.12 | PS4     | 1 ms      | 0.55 ms | 2.33 ms | 0.90 ms | 0.32 ms | 98.19%    | 1.81%    | 0%       |
| v0.7.12 | PS5     | 1 ms      | 0.55 ms | 2.38 ms | 0.91 ms | 0.32 ms | 98.18%    | 1.82%    | 0%       |

Full results can be found in the [GP2040-CE v0.7.12 Firmware Latency Test Results](https://github.com/OpenStickCommunity/Site/raw/main/latency_testing/GP2040-CE_Firmware_Latency_Test_Results_v0.7.12.xlsx) .xlsx Sheet.

Results from v0.7.11 can be found [HERE](https://github.com/OpenStickCommunity/Site/raw/main/latency_testing/GP2040-CE_Firmware_Latency_Test_Results_v0.7.11.xlsx). Previous results can be found in the `latency_testing` folder.

## Support

If you would like to discuss features, issues or anything else related to GP2040-CE please [create an issue](https://github.com/OpenStickCommunity/GP2040-CE/issues/new) or join the [OpenStick GP2040-CE Discord](https://discord.gg/k2pxhke7q8) support channel.

## Contributing

Want to help improve GP2040-CE? There are a bunch of ways to contribute!
# GP2040-CE (modified)

Original project: https://github.com/OpenStickCommunity/GP2040-CE

This fork contains a small, targeted set of changes made to support two
identical joysticks ("Player 1" and "Player 2") from the same UF2 file.

Changes in this branch

- Added `PlayerDriver` (generic HID) which presents the device as either
  "Player 1" or "Player 2" depending on a boot-time selection.
- Boot-time selection: hold B1 at power-on to choose Player 1, or hold B2
  at power-on to choose Player 2. The selection is applied before driver
  initialization so the same UF2 works for both units.
- Added a single board config at `configs/Player/BoardConfig.h` for the
  joystick mapping (4‑way D‑pad, 6 face buttons, Select/Start).
- Device advertises different product strings and PIDs per player. Current
  VID/PID used here: VID=0x1209 (pid.codes), PID=0x5BF0 (Player 1),
  PID=0x5BF1 (Player 2). Change these in the driver if you require
  vendor-specific IDs.

How to build the UF2

From the repository root:

```bash
# Recommended: skip the web build if you do not need the web UI assets or
# if Node/npm causes issues on your host machine.
SKIP_WEBBUILD=TRUE cmake -S . -B build
cmake --build build -j 8

# The UF2 file will be generated under:
# build/GP2040-CE_<version>_Player.uf2
```

For a full build including web assets (requires Node.js and npm):

```bash
cmake -S . -B build
cmake --build build -j 8
```

If the web build fails with an npm error (for example `ENOTEMPTY`), try:

```bash
rm -rf www/node_modules
npm ci --prefix www
cmake --build build -j 8
```

Flashing the UF2

1. Enter bootloader mode on the RP2040 board (double-tap BOOTSEL or hold
   BOOTSEL while plugging it in).
2. Copy the UF2 file to the mounted `RPI-RP2` drive, or use `picotool`:

```bash
# Example copy on macOS / Linux:
# cp build/GP2040-CE_*.uf2 /Volumes/RPI-RP2/
# Or using picotool:
# picotool load build/GP2040-CE_*.uf2
```

Notes

- This fork intentionally uses the same UF2 for both physical units and
  relies on a held button at boot to differentiate Player 1 vs Player 2.
- If you want to change the advertised VID/PID or product strings, edit
  `src/drivers/player/PlayerDriver.*`.

Upstream

For the original documentation, examples and additional board configs see:
https://github.com/OpenStickCommunity/GP2040-CE
