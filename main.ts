/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah Yang
 * Created on: March 2026
 * This program turns neopixels on depending on the lighting
*/

// variables needed
let lightLevel: number = 0
const myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)


// setup
basic.showIcon(IconNames.Happy)
myNeopixelStrip.clear()
myNeopixelStrip.show()
basic.clearScreen()

// running Button A
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    lightLevel = input.lightLevel()
    basic.showNumber(lightLevel)

    myNeopixelStrip.clear()
    if (lightLevel > 52) {
        myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 104) {
        myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 156) {
        myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 208) {
        myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }

    myNeopixelStrip.show()

    basic.showString("Light level is " + lightLevel)
})

// running Button B
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(lightLevel)
    myNeopixelStrip.clear()
    myNeopixelStrip.show()
})
