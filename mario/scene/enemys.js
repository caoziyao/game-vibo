class Enemys{
    constructor(game) {
        this.game = game
        this.level = ''
        this.enemys = []
        this.speed = 0.5

        this.enemysType = {
            'e0': 'green_koopa_troopa',
            'e1': 'goomba',
        }

        for (var i = 0; i < 3; i++) {
            var b = {}
            var key = 'e' + randonBetween(0, 1)
            var name = this.enemysType[key]
            log(name)
            b.texture = game.textureByName(name)
            b.x = 400 + (i * randonBetween(30, 100))
            b.w = b.texture.width
            b.h = b.texture.height

            if (key === 'e0') {
                b.y = 290
            } else {
                b.y = 305
            }

            this.enemys.push(b)
        }
    }

    static new(...args) {
        return new this(...args)
    }

    moveScene(step) {

        for (var i = 0; i < this.enemys.length; i++) {
            var e = this.enemys[i]
            // log('b', b)
            e.x -= step
        }
    }

    move() {

    }
    // 碰撞
    collide(mario, enemy) {
        return rectIntersects(enemy, mario) && rectIntersects(mario, enemy)
    }

    update() {
        var scene = this.game.scene
        for (var i = 0; i < this.enemys.length; i++) {
            var b = this.enemys[i]
            b.x = b.x - this.speed
        }
    }

    draw() {
        var game = this.game
        for (var i = 0; i < this.enemys.length; i++) {
            var b = this.enemys[i]
            // log('b', b)
            game.context.drawImage(b.texture, b.x, b.y)
        }
    }


}
