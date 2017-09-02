class Background {
    constructor(game) {
        this.game = game

        this.bg = game.textureByName('bg')

    }


    static new(...args) {
        return new this(...args)
    }

    draw() {
        let g = this.game
        g.context.drawImage(this.bg, 0, 0, g.height, g.width)
    }

    update() {

    }
}
