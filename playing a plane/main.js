

var __main = function() {
    var images = {
        bg: 'img/bg.png',
        bullet: 'img/bullet.png',
        enemy: 'img/enemy.png',
        hero: 'img/hero.png',
        enemy_down: 'img/enemy_down.png',
    }

    var game = Game.instance(30, images, function(g){
        // var s = SceneTitle.new(g)
        var s = SceneMain.new(g)
        g.runWithScene(s)

    })
}
window.onload = function(){
    __main()
}
