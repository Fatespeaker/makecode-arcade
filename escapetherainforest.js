scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
    otherSprite.destroy()
})
info.setScore(0)
let mySprite = sprites.create(img`
    . . . . 1 . . . 1 . . . . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    . . . . 1 7 7 7 1 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 7 f 7 f 7 . . . . . . . 
    7 . . . 7 7 7 7 7 . . . 7 . . . 
    5 7 . . 5 7 7 7 5 . . 7 5 . . . 
    5 5 7 . 5 5 7 5 5 . 7 5 5 . . . 
    5 5 5 7 5 5 5 5 5 7 5 5 5 . . . 
    . . . 7 5 5 5 5 5 7 . . . . . . 
    . . 7 7 5 5 5 5 5 7 7 . . . . . 
    . . 7 7 7 5 5 5 7 7 7 . . . . . 
    . 7 7 7 7 5 5 5 7 7 7 7 . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(14)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010401010102010101010101010101010100010202010100000000020101010101000101020201010201000001010101010000000000000000000002010102010202020100010202000200020102020202020201000201020002000000000202020101000000000000020002010002010102010002030202010200020200010102010200020201030102000202000202000000000000000000000000000005020001020201020301010300010202020200000002020201030203000203020201000100000000000000000002030101010002020202020101020202020203010100010101020203020301010201030101010103010103010101010101030101`, img`
    2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 . 2 2 2 2 2 . . . . 2 2 2 2 
    2 2 . 2 2 2 2 2 2 2 2 . . 2 2 2 
    2 2 . . . . . . . . . . 2 2 2 2 
    2 2 2 2 2 . 2 2 2 . 2 . 2 2 2 2 
    2 2 2 2 2 . 2 2 2 . 2 . . . . 2 
    2 2 2 2 . . . . . . 2 . 2 2 . 2 
    2 2 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
    2 2 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
    2 . . . . . . . . . . . . . . . 
    2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
    2 . . . 2 2 2 2 2 2 2 . 2 2 2 2 
    2 . 2 . . . . . . . . . 2 2 2 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.shrub,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenEast], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
info.startCountdown(20)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . b f . . . . . . . . . 
    . . . . . b b b . . . . . . . . 
    . . . . d b d . d . . . . . . . 
    . . . d d d d d d . . . . . . . 
    . . . d d d d d d . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . . . d d . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite2, myTiles.transparency16)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 9 f . . . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . d 9 d . d . . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . . d d d . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite3, myTiles.transparency16)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . 4 f . . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . d 4 d . d . . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . . d d d . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite4, myTiles.transparency16)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . f a . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . c . c f c . c . c . . . 
    . . . . c c c c c c c c c c . . 
    . . . . . c c c c c c c c . . . 
    . . . . . c c c c c c c c . . . 
    . . . . . . . c c c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite5, myTiles.transparency16)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d . . . . . . . . . . . 
    . . . . e f . . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . d . d e d . d . . . . . . . 
    . d d d d d d d d . . . . . . . 
    . . d d d d d d . . . . . . . . 
    . . . d d d d . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite6, myTiles.transparency16)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 . . . . . . . . . . . 
    . . . 9 . . . . . 9 . . . . . . 
    . . . . 9 . . . . 9 f . . . . . 
    . . . d 9 d . d . d 9 d . . . . 
    . . d d d d d d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . . d d d d d d d d d . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite6, myTiles.transparency16)
forever(function () {
    music.playMelody("C C5 D B E A G - ", 120)
})
