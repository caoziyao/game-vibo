class Block{
    constructor(game, position) {
        this.game = game
        this.position = position
        this.img = game.imageByName('block')

        var p = position

        this.x  = p[0]
        this.y = p[1]
        this.image = this.img.image
        this.alive = true
        this.lifes = p[2] || 1
        this.w = this.img.w
        this.h = this.img.h

        // log('xxxxx', this.x, this.y)
    }

    static new(...args) {
        this.i =  new this(...args)
        return this.i
    }
    hasPoint(x, y) {
        var xIn = x >= this.x && x <= this.x + this.w
        var yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }
    collide(b) {
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }

    kill() {
        this.lifes--
        if (this.lifes < 1) {
           this.alive = false
        }
    }
}
