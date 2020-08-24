sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true)
    mySprite.say("Thanks!")
})
let mySprite: Sprite = null
game.splash("Save the Dragon!", "He is burning!")
scene.setBackgroundColor(5)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . f 7 f 7 . . . . . . . 
    . . . . f 7 7 3 7 . . . . . . . 
    . . . f 7 7 7 7 7 . . . f f 7 . 
    . . . f 7 7 f . 7 f . f f 7 7 . 
    . . . . f f . . 7 7 f f 7 7 7 . 
    . . . . . . . . 7 7 f 7 7 7 . . 
    . . . . . . . . 7 7 f 7 7 . . . 
    . . . . . . . 7 7 f . . . . . . 
    . . . . . . 7 7 f . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.startEffect(effects.fire)
controller.moveSprite(mySprite)
let Water = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Water.startEffect(effects.bubbles)
Water.setPosition(140, 100)
info.startCountdown(5)
mySprite.say("Help! I'm burning!")
mySprite.setFlag(SpriteFlag.StayInScreen, true)
