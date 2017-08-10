


var __main = function () {
    var images = {
        background: 'img/overworld_bg.png',
        mario: 'img/Mario.gif',
        // walk
        mario_walk1: 'img/mario_walk/Mario - Walk1.gif',
        mario_walk2: 'img/mario_walk/Mario - Walk2.gif',
        mario_walk3: 'img/mario_walk/Mario - Walk3.gif',
        mario_jump: 'img/Mario - Jump.gif',
        bricks: 'img/Bricks.gif',

    }

    var game = Game.instance(30, images, function () {
        var s = SceneMain.new(game)
        game.runWithScene(s)
    })
}


window.onload = function(){
    __main()
}
