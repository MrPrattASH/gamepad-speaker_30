radio.setGroup(30)
// set init pin pull (has onboard resistors)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
// we're in the middle of our controller
basic.forever(function on_forever() {
    // buttons
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        // red 
        radio.sendString("red")
    }
    
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        // green
        radio.sendString("green")
    }
    
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        // blue
        radio.sendString("blue")
    }
    
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        // yellow
        radio.sendString("yellow")
    }
    
    // analog joystick
    if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
        radio.sendValue("fwd", pins.analogReadPin(AnalogPin.P2))
    } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
        radio.sendValue("rev", pins.analogReadPin(AnalogPin.P2))
    } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
        radio.sendValue("left", pins.analogReadPin(AnalogPin.P1))
    } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
        radio.sendValue("right", pins.analogReadPin(AnalogPin.P1))
    } else {
        radio.sendString("stop")
    }
    
})
