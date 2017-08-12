class Pipe{
    constructor(game) {
        this.game = game
        this.pips = []
    }

    static new(...args) {
        return new this(...args)
    }

    moveScene(step) {
        for (var i = 0; i < this.pips.length; i++) {
            var b = this.pips[i]
            // log('b', b)
            b.x -= step
        }
    }


    createElements(baseX, positions) {
        var game = this.game
        // var brickY = randonBetween(50, 200)
        for (var i = 0; i < positions.length; i++) {
            var p = positions[i]
            var x = p[0]
            var y = p[1]

            var b = {}
            b.texture = game.textureByName('pipe')
            b.x = baseX + x
            b.y = y
            this.pips.push(b)
        }
    }


    update() {

    }

    draw() {
        // this.game.context.drawImage(this.texture, this.x, this.y)

        var game = this.game
        for (var i = 0; i < this.pips.length; i++) {
            var b = this.pips[i]
            // log('b', b)
            game.context.drawImage(b.texture, b.x, b.y)
        }
    }


}
