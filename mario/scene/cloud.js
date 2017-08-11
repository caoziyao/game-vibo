class Clouds{
    constructor(game) {
        this.game = game
        this.bricks = []

        this.texture = game.textureByName('cloud_double')
        this.x = randonBetween(100, 500)
        this.y = randonBetween(50, 200)
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
