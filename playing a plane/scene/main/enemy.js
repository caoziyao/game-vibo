
class SceneEnemy {
    constructor(game) {
        this.game = game
        //this.background = game.imageByName('bg')

        this.setUp()
    }

    setUp() {
        var game = this.game

        var lifeType = {
            'enemy1': 1,
            'enemy2': 2,
            'enemy3': 3,
        }

        var type = randonBetween(1, 2)
        var name = 'enemy' + type
        this.image = GuaImage.new(game, name)
        this.w = this.image.w
        this.h = this.image.h
        this.cooldown = 10
        this.bullets = []
        this.bulletSpeed = 10
        this.bulletY = 0
        // 图片坐标
        this.x = randonBetween(0, 350)
        this.y = randonBetween(0, 200)
        this.speed = config.enemy_speed.value + randonBetween(0, 4)

        // 敌人生命值
        this.life = lifeType[name]
        //log('this.life', this.life)

        // 敌人消失
        this.alive = true
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }


    move() {
        this.y += this.speed
    }

    kill() {
        this.life--
        this.alive = false
        // if (this.life == 0) {
        //     this.alive = false
        // }
    }

    addBullets() {

    }

    bulletMove() {
        for (var p of this.bullets) {
            p.y += this.bulletSpeed
        }
    }

    // 发射子弹
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 15
            var game = this.game
            var bullet = SceneBullet.new(game)
            bullet.x = this.x + this.w / 2
            bullet.y = this.y + this.h
            this.bullets.push(bullet)
            this.scene.addElement(bullet)
        }
        // bullet.fire()
    }

    hasPoint(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }

    killing() {
        var self = this
        // self.alive = false
        self.image = GuaImage.new(self.game,'enemy_down')
        setTimeout(function () {
            self.kill()
        }, 150)
    }

    draw() {
        this.game.drawImage(this)
    }


    // collide(b) {
    // //    return this.alive && this.rectIntersects(this, b) || this.rectIntersects(b, this)
    // }

    update() {
        if (this.y > 600) {
            this.setUp()
        }

        if (this.cooldown > 0) {
            this.cooldown--
        }

        this.move()

        if (this.alive == true) {
            this.fire()
        }
        this.bulletMove()

    }

}
