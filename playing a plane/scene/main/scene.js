class SceneMain {
    constructor(game) {
        this.game = game
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        this.game.context.fillText('游戏', 100, 190)
    }

    update() {

    }



}
