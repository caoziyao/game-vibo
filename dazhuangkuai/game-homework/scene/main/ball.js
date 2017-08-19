class Ball{
    constructor(game) {
        this.game = game
        this.img = game.imageByName('ball')
        this.image = this.img.image
        this.x = 300
        this.y = 300
        this.speedX = 5
        this.speedY = 5
        this.fired = false

    }

    static new(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    fire() {
        this.fired = true
    }

    move() {
        if (this.fired) {
            // log('move')
            if (this.x < 0 || this.x > 800) {
                this.speedX = -this.speedX
            }
            if (this.y < 0 || this.y > 600) {
                this.speedY = -this.speedY
            }
            // move
            this.x += this.speedX
            this.y += this.speedY
        }
    }

    反弹() {
        this.speedY *= -1
    }


    hasPoint(x, y) {
        var xIn = x >= this.x && x <= this.x + this.w
        var yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }
}
