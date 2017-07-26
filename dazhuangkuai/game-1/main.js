var loadLevel = function (game, row) {
    var blocks = []
    var spaceX = 80;
    var spaceY = 40;
    var ncol = 10;

    for (var i = 0; i < row; i++) {
        for (var col = 0; col < ncol; col++) {
            var position = {
              x: (col) * spaceX,
              y: (i) * spaceY,
            }
            var b = Block(game, position)
            blocks.push(b)
        }
    }
    return blocks;
}


var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            level = k
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function () {
    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
        background: 'img/starfield.jpg',
    }


    var game = Game.instance(30, images, function(g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true);


}

__main()
