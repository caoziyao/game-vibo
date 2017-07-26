

var __main = function() {
    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }

    var game = Game.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)

    })
}
window.onload = function(){
    __main()
}
