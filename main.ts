input.onButtonPressed(Button.A, function () {
    basic.showNumber(Player_Guess)
    basic.pause(500)
    Player_Guess += 1
    basic.showNumber(Player_Guess)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (Player_Guess == SECRET_NUMBER) {
        basic.showString("WINNER")
    } else if (Player_Guess > SECRET_NUMBER) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Player_Guess)
    basic.pause(500)
    Player_Guess += -1
    basic.showNumber(Player_Guess)
    basic.pause(500)
    basic.clearScreen()
})
let Player_Guess = 0
let SECRET_NUMBER = 0
SECRET_NUMBER = randint(0, 20)
Player_Guess = 0
basic.showString("Guess Away")
