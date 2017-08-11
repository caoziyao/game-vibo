class SceneBackground {
    constructor(game, name) {
        // super(game, name)
        this.game = game
        this.image = GuaImage.new(game, name)
        this.x = 0
        this.y = 0
        this.w = 400
        this.h = 600
        this.alive = true

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    update() {

    }

    draw() {
        this.game.drawImage(this)
    }

}
