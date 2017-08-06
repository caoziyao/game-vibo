
class SceneEnemy {
    constructor(game) {
        this.game = game
        //this.background = game.imageByName('bg')

        this.setUp()

    }

    setUp() {
        var game = this.game
        var type = randonBetween(1, 2)
        var name = 'enemy' + type
        this.image = GuaImage.new(game, name)
        this.w = this.image.w
        this.h = this.image.h
        // 图片坐标
        this.x = randonBetween(0, 350)
        this.y = randonBetween(0, 200)
        this.speed = randonBetween(4, 13)

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
        this.image = GuaImage.new(self.game,'enemy_down')
        setTimeout(function () {
            self.kill()
        }, 150)
    }

    draw() {
        this.game.drawImage(this)
    }


    // collide(b) {
    // //    return this.alive && this.rectIntersects(this, b) || this.rectIntersects(b, this)
    // }

    update() {
        if (this.y > 600) {
            this.setUp()
        }

        this.move()
    }

}
