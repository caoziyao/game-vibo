class Background{
    constructor(game) {
        this.game = game
        this.bricks = []

        this.texture = game.textureByName('background')
        this.x = 0
        this.y = 0
    }

    static new(...args) {
        return new this(...args)
    }

    move(step) {
        this.x -= step
    }


    update() {

    }

    draw() {
        this.game.context.drawImage(this.texture, this.x, this.y, 600, 400)
    }


}
