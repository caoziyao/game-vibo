class Clouds{
    constructor(game) {
        this.game = game
        this.clounds = []

        // this.texture = game.textureByName('cloud_double')
        // this.x = randonBetween(100, 500)
        // this.y = randonBetween(50, 200)
    }

    static new(...args) {
        return new this(...args)
    }

    createElements(baseX, positions) {
        var game = this.game
        // var brickY = randonBetween(50, 200)
        for (var i = 0; i < positions.length; i++) {
            var p = positions[i]
            var x = p[0]
            var y = p[1]

            var b = {}
            b.texture = game.textureByName('cloud_double')
            b.x = baseX + x
            b.y = y
            this.clounds.push(b)
        }
    }

    moveScene(step) {
        // var step = this.game.scene.len this.levelMoveStep
        // this.x -= step
        for (var i = 0; i < this.clounds.length; i++) {
            var b = this.clounds[i]
            // log('b', b)
            b.x -= step
        }
    }

    update() {

    }

    draw() {
        // this.game.context.drawImage(this.texture, this.x, this.y)

        var game = this.game
        for (var i = 0; i < this.clounds.length; i++) {
            var b = this.clounds[i]
            // log('b', b)
            game.context.drawImage(b.texture, b.x, b.y)
        }
    }


}
