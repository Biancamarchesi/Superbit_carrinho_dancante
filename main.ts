input.onButtonPressed(Button.A, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 135)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 135)
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    SuperBit.MotorStopAll()
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 135)
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
})
SuperBit.MotorStopAll()
SuperBit.Servo2(SuperBit.enServo.S1, 105)
basic.showString("OI, BIANCA!")
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(1000)
})
