input.onPinPressed(TouchPin.P0, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(Points)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1e+40; index++) {
        for (let index = 0; index < 4; index++) {
            Enemy.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        if (Enemy.isTouchingEdge()) {
            Enemy.delete()
        } else if (Player.isTouching(Enemy)) {
            Points += 1
            Enemy.delete()
        }
    }
})
let Player: game.LedSprite = null
let Enemy: game.LedSprite = null
let Points = 0
basic.showString("" + (Points))
basic.showString("" + (Enemy))
Player = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
	
})
