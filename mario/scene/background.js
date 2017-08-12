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

    moveScene(step) {
        // var step = this.game.scene.len this.levelMoveStep
        this.x -= step
    }


    update() {

    }

    draw() {
        this.game.context.drawImage(this.texture, this.x, this.y, 600, 400)
    }


}
