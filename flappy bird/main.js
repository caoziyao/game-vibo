

var gameStart = function() {
    var images = {
        background: 'img/bg_day.png',
        bird0: 'img/bird0_0.png',
        bird1: 'img/bird0_1.png',
        bird2: 'img/bird0_2.png',
        land: 'img/land.png',
        pipe_down: 'img/pipe_down.png',
        pipe_up: 'img/pipe_up.png',
    }

    var game = Game.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        // var s = SceneMain.new(g)
        g.runWithScene(s)

    })
}
window.onload = function(){
    gameStart()
}
