
var Paddle = function (game) {
    var o = game.imageByName('paddle')
    o.x = 100
    o.y = 450
    o.speed = 15
    var paddle = o
    o.moveLeft = function () {
        o.x -= o.speed;
    }

    o.moveRight = function () {
        o.x += o.speed;
    }

    var aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
    }

    o.collide = function(ball) {
        var a = o
        var b = ball
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }

    return o;
}
