class GuaImage {
    constructor(game, name) {
        // this.game = game

        this.texture = game.imageByName(name)
        this.w = this.texture.width
        this.h = this.texture.height
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }
    draw() {

    }
    update() {

    }
}
