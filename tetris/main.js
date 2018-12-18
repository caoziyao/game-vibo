
var __main = function () {
    var images = {
        background: 'images/background.png',
    }

    var game = Game.instance(30, images, function () {
        var s = ScenesMain.new(game, 0)
        game.runWithScene(s)
    })
}

window.onload = function(){
    __main()
}
