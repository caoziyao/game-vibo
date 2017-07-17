
var log = console.log.bind(console);


var imageFromPath = function (path) {
    var img = new Image();   // 创建一个<img>元素
    img.src = path; // 设置图片源地址

    return img
}

var Paddle = function () {
    var image = imageFromPath('paddle.png');
    var o = {
        img: image,
        x: 100,
        y: 200,
        speed: 5,
    };

    o.moveLeft = function () {
        o.x -= o.speed;
    }

    o.moveRight = function () {
        o.x += o.speed;
    }

    o.collide = function(ball) {
        if (ball.y + ball.img.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.img.width) {
                log('相撞')
                return true
            }
        }
        return false
    }

    return o;
}

var Ball = function () {
    var image = imageFromPath('ball.png');
    var o = {
        img: image,
        x: 100,
        y: 100,
        speedX: 10,
        speedY: 10,
        fired: false,
    };

    o.move = function () {
        if (o.fired) {
            // log('move')
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }

    o.fire = function () {
        o.fired = true
    }

    return o;
}

var Game = function () {
    var canvas = document.querySelector('#id-canvas');
    var context = canvas.getContext('2d');

    var g = {
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
    }

    g.drawImage = function (gwImage) {
        g.context.drawImage(gwImage.img, gwImage.x, gwImage.y);
    }

    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true;
    })

    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false;
    })

    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    // timer
    setInterval(function () {
        var actions = Object.keys(g.actions);
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if(g.keydowns[key]) {
                // 如果按键被按下，调用被注册的 action
                g.actions[key]();
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()
    }, 1000 / 30)

    return g
}


var __main = function () {
    var ball = Ball();
    var paddle = Paddle();
    var game = Game();

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
        ball.move();
        // 判断相撞
        if (paddle.collide(ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            ball.speedY *= -1
        }
    }

    game.draw = function () {
        game.drawImage(paddle);
        game.drawImage(ball);
    }


}

__main()
