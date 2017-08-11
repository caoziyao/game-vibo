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

        for (var i = 0; i < 3; i++) {
            var b = {}
            var key = 'e' + randonBetween(0, 2)
            var name = this.bushType[key]
            log(name)
            b.texture = game.textureByName(name)
            b.x = (i * randonBetween(50, 350))
            b.w = b.texture.width
            b.h = b.texture.height

            b.y = 305

            this.bush.push(b)
        }
    }

    static new(...args) {
        return new this(...args)
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
