radio.set_group(30)

#set init pin pull (has onboard resistors)
pins.set_pull(DigitalPin.P13, PinPullMode.PULL_NONE)
pins.set_pull(DigitalPin.P15, PinPullMode.PULL_NONE)
pins.set_pull(DigitalPin.P14, PinPullMode.PULL_NONE)
pins.set_pull(DigitalPin.P16, PinPullMode.PULL_NONE)

def on_forever():

    #buttons
    if pins.digital_read_pin(DigitalPin.P15) == 0: #red 
        radio.send_string("red")
    if pins.digital_read_pin(DigitalPin.P13) == 0: #green
        radio.send_string("green")
    if pins.digital_read_pin(DigitalPin.P16) == 0: #blue
        radio.send_string("blue")
    if pins.digital_read_pin(DigitalPin.P14) == 0: #yellow
        radio.send_string("yellow")
    
    #analog joystick
    if pins.analog_read_pin(AnalogPin.P2) > 550 and (pins.analog_read_pin(AnalogPin.P1) > 400 and pins.analog_read_pin(AnalogPin.P1) < 600):
        radio.send_value("fwd", pins.analog_read_pin(AnalogPin.P2))
    elif pins.analog_read_pin(AnalogPin.P2) < 450 and (pins.analog_read_pin(AnalogPin.P1) > 400 and pins.analog_read_pin(AnalogPin.P1) < 600):
        radio.send_value("rev", pins.analog_read_pin(AnalogPin.P2))
    elif pins.analog_read_pin(AnalogPin.P1) < 450 and (pins.analog_read_pin(AnalogPin.P2) > 400 and pins.analog_read_pin(AnalogPin.P2) < 600):
        radio.send_value("left", pins.analog_read_pin(AnalogPin.P1))
    elif pins.analog_read_pin(AnalogPin.P1) > 550 and (pins.analog_read_pin(AnalogPin.P2) > 400 and pins.analog_read_pin(AnalogPin.P2) < 600):
        radio.send_value("right", pins.analog_read_pin(AnalogPin.P1))
    else:
        radio.send_string("stop") #we're in the middle of our controller
basic.forever(on_forever)
