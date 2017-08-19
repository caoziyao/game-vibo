class Paddle{
    constructor(game) {
        this.game = game
        this.img = game.imageByName('paddle')
        this.image = this.img.image
        this.x = 400
        this.y = 450
        this.speed = 15
        this.w = this.img.w
        this.h = this.img.h
    }

    static new(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    move(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 800 - this.w) {
            x = 800 - this.w
        }
        this.x = x
    }


    moveLeft() {
        this.move(this.x - this.speed)
    }
    moveRight() {
        this.move(this.x + this.speed)
    }
    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    collide(ball) {
        // log('this', this)
        var a = this
        var b = ball
        if (this.aInb(a.x, b.x, b.x + b.w) || this.aInb(b.x, a.x, a.x + a.w)) {
            if (this.aInb(a.y, b.y, b.y + b.h) || this.aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
}
