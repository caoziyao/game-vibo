class Pipe{
    constructor(game) {
        this.game = game
        this.bricks = []

        this.texture = game.textureByName('pipe')
        this.x = randonBetween(100, 500)
        this.y = 273
    }

    static new(...args) {
        return new this(...args)
    }


    update() {

    }

    draw() {
        this.game.context.drawImage(this.texture, this.x, this.y)
    }


}
