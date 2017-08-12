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
    }

    static new(...args) {
        this.i = this.i || new this(...args)
        return this.i
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
