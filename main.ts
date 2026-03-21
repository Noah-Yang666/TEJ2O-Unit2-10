/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah Yang
 * Created on: March 2026
 * This program turns neopixels on depending on the lighting
*/

// variables needed
let lightLevel: number = 0
const myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// setting up
basic.showIcon(IconNames.Happy)
myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

// simulating code for lighting up neopixels
input.onButtonPressed(Button.A, function () {
    // reading and displaying light level 
    lightLevel = input.lightLevel()
    basic.showNumber(lightLevel)
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
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
    
    // closing simulation
    basic.clearScreen()
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.Happy)
})
