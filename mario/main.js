


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
        cloud_double: 'img/Cloud - Double.gif',
        goomba: 'img/Goomba.gif',
        goomba_stomp: 'img/Goomba - Grey - Stomp.gif',
        green_koopa_troopa: 'img/Green Koopa Troopa.gif',
        bush_double: 'img/Bush - Double.gif',
        bush_sigle: 'img/Bush - Single.gif',
        bush_triple: 'img/Bush - Triple.gif',
        pipe: 'img/Pipe.gif',



    }

    var game = Game.instance(30, images, function () {
        var s = ScenesMain.new(game, 0)
        game.runWithScene(s)
    })
}


window.onload = function(){
    __main()
}
