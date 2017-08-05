
var __main = function() {
    var images = {
        background: 'img/bg.png',
        w1: 'img/w1.png',
        w2: 'img/w2.png',
        w3: 'img/w3.png',
        w4: 'img/w4.png',
        w5: 'img/w5.png',
        w6: 'img/w6.png',
        w7: 'img/w7.png',
        w8: 'img/w8.png',
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
