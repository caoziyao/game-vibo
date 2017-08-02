


class SceneEnemy {
    constructor(game) {
        this.game = game
        //this.background = game.imageByName('bg')
        var type = randonBetween(1, 3)
        var name = 'enemy' + type
        log('name', name)
        this.image = GuaImage.new(game, name)

        //
        this.setUp()

    }

    setUp() {
        this.w = 50
        this.h = 50
        // 图片坐标
        this.x = randonBetween(0, 350)
        this.y = randonBetween(0, 200)
        this.speed = randonBetween(5, 15)

        // 敌人消失
        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    move() {
        this.y += this.speed
    }

    kill() {
        this.alive = false
    }

    hasPoint(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }

    killing() {
        var self = this
        setTimeout(function () {
            self.kill()
        }, 150)
    }

    rectIntersects(a, b) {
        var o = a;
        if (b.y > o.y && b.y < o.y + o.image.h) {
            if (b.x > o.x && b.x < o.x + o.image.w) {
                return true
            }
        }
        return false
    }

    collide(b) {
        return this.alive && this.rectIntersects(this, b) || this.rectIntersects(b, this)
    }

    update() {
        if (this.y > 600) {
            this.setUp()
        }

        this.move()
    }

}
