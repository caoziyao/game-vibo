class GuaImage {
    constructor(game, name) {
        this.game = game

        this.texture = game.imageByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height

        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}
