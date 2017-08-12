class Bricks{
    constructor(game) {
        this.game = game
        this.bricks = []
    }

    static new(...args) {
        return new this(...args)
    }

    createElements(baseX, items) {
        var game = this.game
        // var brickY = randonBetween(50, 200)
        for (var i = 0; i < items.length; i++) {
            var item = items[i]
            var num = item.number
            var x = item.x
            var y = item.y
            for (var j = 0; j < num; j++) {
                var b = {}
                b.texture = game.textureByName('bricks')
                b.x = baseX + x + (j * b.texture.width)
                b.y = y
                this.bricks.push(b)
            }

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
