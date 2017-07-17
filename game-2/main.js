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
        ball: 'ball.png',
        block: 'block.png',
        paddle: 'paddle.png',
    }


    var game = Game(30, images, function(g) {
        blocks = loadLevel(game, 2);

        var ball = Ball(game);
        var paddle = Paddle(game);
        // var game = Game();
        var score = 0;


        var leftDown = false;
        var rightDown = false;

        game.registerAction('a', function () {
            paddle.moveLeft();
        })
        game.registerAction('d', function () {
            paddle.moveRight();
        })
        game.registerAction('f', function () {
            ball.fire();
        })

        game.update = function () {
            if (window.paused) {
                return
            }
            ball.move();
            // 判断相撞
            if (paddle.collide(ball)) {
                // 这里应该调用一个 ball.反弹() 来实现
                ball.speedY *= -1
            }
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if (block.collide(ball)) {
                  log('collide...kill')
                  block.kill();
                  // 更新分数
                  score += 100;
                  ball.speedY *= -1;
                }
            }
        }

        game.draw = function () {
            game.drawImage(paddle);
            game.drawImage(ball);

            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if (block.alive) {
                    game.drawImage(block)
                 }
            }

            game.context.fillText(`分数：${score}`, 20, 550)
        }
    })

    enableDebugMode(game, true);


}

__main()
