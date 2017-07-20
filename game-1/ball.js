
var Ball = function (game) {
    // var image = imageFromPath('ball.png');
    var o = game.imageByName('ball')

    o.x = 100
    o.y = 400
    o.speedX = 5
    o.speedY = 5
    o.fired = false
    o.fire = function() {
        o.fired = true
    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }

    o.反弹 = function() {
        o.speedY *= -1
    }

    o.move = function () {
        if (o.fired) {
            // log('move')
            if (o.x < 0 || o.x > 800) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 600) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }

    return o;
}
