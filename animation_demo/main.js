
var __main = function() {
    var images = {
        background: 'img/bg.png',
        w1: 'img/walking/w1.png',
        w2: 'img/walking/w2.png',
        w3: 'img/walking/w3.png',
        w4: 'img/walking/w4.png',
        w5: 'img/walking/w5.png',
        w6: 'img/walking/w6.png',
        w7: 'img/walking/w7.png',
        w8: 'img/walking/w8.png',
        idle1: 'img/idle/s1.png',
        idle2: 'img/idle/s2.png',
        idle3: 'img/idle/s3.png',
    }

    var game = Game.instance(30, images, function(g){
        var s = SceneMain.new(g)
        // var s = SceneMain.new(g)
        g.runWithScene(s)


    })
}
window.onload = function(){
    __main()
}
