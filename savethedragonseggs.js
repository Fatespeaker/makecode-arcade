sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    effects.clearParticles(mySprite)
})
let Egg: Sprite = null
let mySprite: Sprite = null
game.splash("Save the Eggs!")
scene.setBackgroundColor(6)
tiles.setTilemap(tiles.createTilemap(hex`0d0008000101010101010101030401010102010101010101010101010101020101010101010101010101010202020101010101010101050502020101010101010101010501020202020101010101010505010101010202050101010101010101010101010201010101010101`, img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.castle.tileDarkGrass1], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 7 . . . . 1 . . 1 . . . . 7 . 
    . 5 7 . . . 7 7 7 7 . . . 7 5 . 
    . 5 5 7 . . f 7 7 f . . 7 5 5 . 
    . 5 5 5 7 . 5 7 7 5 . 7 5 5 5 . 
    . 5 5 5 5 7 5 7 7 5 7 5 5 5 5 . 
    . 5 5 5 5 7 5 5 5 5 7 5 5 5 5 . 
    . . . . 7 7 5 5 5 5 7 7 . . . . 
    . . . . 7 7 5 5 5 5 7 7 . . . . 
    . . . 7 7 7 5 5 5 5 7 7 7 . . . 
    . . . . . . 7 7 . 7 7 . . . . . 
    . . . . . . 7 7 . 7 7 . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.say("We have to save the eggs!", 5000)
mySprite.startEffect(effects.clouds)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    Egg = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d d . . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . . d d d . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Egg.setPosition(randint(0, 170), randint(0, 120))
    Egg.startEffect(effects.ashes)
})
