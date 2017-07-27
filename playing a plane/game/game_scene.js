class GuaScene {
    constructor(game) {
        this.game = game
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
