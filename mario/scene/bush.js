class Bush{
    constructor(game) {
        this.game = game
        this.level = ''
        this.bush = []

        this.bushType = {
            'e0': 'bush_sigle',
            'e1': 'bush_double',
            'e2': 'bush_triple',
        }

    }

    static new(...args) {
        return new this(...args)
    }

    moveScene(step) {
        for (var i = 0; i < this.bush.length; i++) {
            var b = this.bush[i]
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
            b.texture = game.textureByName('bush_sigle')
            b.x = baseX + x
            b.y = y
            this.bush.push(b)
        }
    }

    move() {

    }


    update() {

    }

    draw() {
        var game = this.game
        for (var i = 0; i < this.bush.length; i++) {
            var b = this.bush[i]
            // log('b', b)
            game.context.drawImage(b.texture, b.x, b.y)
        }
    }


}
