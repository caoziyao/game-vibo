
var Paddle = function (game) {
    var o = game.imageByName('paddle')
    o.x = 100
    o.y = 250
    o.speed = 15
    var paddle = o
    o.moveLeft = function () {
        o.x -= o.speed;
    }

    o.moveRight = function () {
        o.x += o.speed;
    }

    o.collide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                log('相撞')
                return true
            }
        }
        return false
    }

    return o;
}
