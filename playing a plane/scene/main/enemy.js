class SceneEnemy {
    constructor(game) {
        this.game = game
        //this.background = game.imageByName('bg')
        this.image = GuaImage.new(game, 'enemy')
        this.image.w = 50
        this.image.h = 50
        // 图片坐标
        this.x = 10
        this.y = 30
        this.speed = 5

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
        }, 250)
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

}
