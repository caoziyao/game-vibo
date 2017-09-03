class GuaImage {
    constructor(game, name) {
        this.game = game

        this.img = game.textureByName(name)
        this.w = this.img.w
        this.h = this.img.h
        this.x = 0
        this.y = 0
        this.alive = true

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }
    draw() {
        this.game.drawImage(this.img.texture, this.x, this.y, this.w, this.h)
    }
    update() {

    }
}
