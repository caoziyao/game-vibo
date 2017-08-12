class Bricks{
    constructor(game) {
        this.game = game
        this.bricks = []
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
            b.texture = game.textureByName('bricks')
            b.x = baseX + x
            b.y = y
            this.bricks.push(b)
        }
    }

    moveScene(step) {
        for (var i = 0; i < this.bricks.length; i++) {
            var b = this.bricks[i]
            // log('b', b)
            b.x -= step
        }
        // var step = this.game.scene.len this.levelMoveStep

    }


    update() {

    }

    draw() {
        var game = this.game
        for (var i = 0; i < this.bricks.length; i++) {
            var b = this.bricks[i]
            // log('b', b)
            game.context.drawImage(b.texture, b.x, b.y)
        }
    }


}
