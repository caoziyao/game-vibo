class Bricks{
    constructor(game) {
        this.game = game
        this.bricks = []

        var brickY = randonBetween(50, 200)
        for (var i = 0; i < 4; i++) {
            var b = {}
            b.texture = game.textureByName('bricks')
            b.x = 400 + (i * b.texture.width)
            b.y = brickY
            this.bricks.push(b)
        }
    }

    static new(...args) {
        return new this(...args)
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
