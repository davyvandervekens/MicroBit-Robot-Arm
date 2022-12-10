input.onButtonPressed(Button.A, function () {
    if (posA >= 10 || posA <= 180) {
        posA += 10
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, posA, 64)
        basic.showNumber(posA)
    }
})
input.onButtonPressed(Button.AB, function () {
    posA = 90
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, posA, 64)
    basic.showNumber(posA)
})
input.onButtonPressed(Button.B, function () {
    if (posA >= 10 || posA <= 180) {
        posA += -10
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, posA, 64)
        basic.showNumber(posA)
    }
})
let posA = 0
posA = 90
PCA9685.reset(64)
basic.forever(function () {
	
})
