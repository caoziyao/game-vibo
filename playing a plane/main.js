

var __main = function() {
    var images = {
        background: 'img/bg.png',
        bullet: 'img/bullet.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        hero: 'img/hero.png',
        enemy_down: 'img/enemy_down.png',
    }

    var game = Game.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        // var s = SceneMain.new(g)
        g.runWithScene(s)

    })
}
window.onload = function(){
    __main()
}
