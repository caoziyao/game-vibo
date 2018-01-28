export default class GuaImage {
    constructor(name) {
        // this.game = game

        this.texture = game.imageByName(name)
        this.w = this.texture.width
        this.h = this.texture.height
        this.image  = {
            texture: this.texture,
        }
        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }
    draw() {
        this.game.drawImage(this, this.x, this.y, this.w, this.h)
    }
    update() {

    }
}
