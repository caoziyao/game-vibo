class Bricks{
    constructor(game) {
        this.game = game
        this.bricks = []

        for (var i = 0; i < 4; i++) {
            var imge = {}
            imge.texture = game.textureByName('bricks')
            imge.x = 400 + (i * imge.texture.width)
            imge.y = 200
            this.bricks.push(imge)
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
