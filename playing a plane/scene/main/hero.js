class SceneHero {
    constructor(game) {
        this.game = game

        this.image = GuaImage.new(game, 'hero')
        this.debugModeEnabled = true
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.alive = true
        this.w = this.image.w / 2
        this.h = this.image.h / 2
        this.bullets = []
        // 图片坐标
        this.x = 150
        this.y = 450
        this.speed = config.hero_speed.value
        // 子弹类型
        this.numberOfBullet = 1
        // 子弹冷却时间
        this.cooldown = 0

        this.alive = true

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    setupInputs() {
        var game = this.game
        // 飞机运动
        game.registerAction('a', () => {
            this.moveLeft()
        })
        game.registerAction('d',  () =>{
            this.moveRight()
        })
        game.registerAction('w',  () =>{
            this.moveUp()
        })
        game.registerAction('s',  () =>{
            this.moveDown()
        })
    }

    moveLeft() {
        this.x <= 0 ? this.x = 0 : this.x -= this.speed
    }

    moveRight() {
        var w = this.image.w
        this.x >= 400 - w / 2 ? this.x = 400 - w / 2 : this.x += this.speed
    }

    moveUp() {
        var h = this.image.h
        this.y <= 0 / 2 ? this.y = 0 : this.y -= this.speed
    }

    moveDown() {
        var h = this.image.h
        this.y >= 600 - h / 2 ? this.y = 600 - h / 2 : this.y += this.speed

    }

    bulletMove() {
        for (var p of this.bullets) {
            p.y -= p.speed
        }
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }

        this.bulletMove()
    }

    collideEnemy(enemy) {
        // log('enemy.alive', enemy.alive)
        return enemy.alive && (rectIntersects(this, enemy) || rectIntersects(enemy, this))
    }


    kill() {
        this.alive = false
        var s = SceneEnd.new(this.game)
        this.game.replaceScene(s)

    }

    draw() {
        this.game.drawImage(this)
    }

    debug() {
        // 动态速度
        this.speed = config.hero_speed.value
    }


    // 发射子弹
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.bullet_cooldown.value
            var game = this.game
            for (var i = 0; i < this.numberOfBullet; i++) {
                var b = SceneBullet.new(game)
                var y = this.x + this.w / 2
                b.x = i % 2 == 0 ? y  + i * 20 : y - i * 20
                b.y = this.y
                this.bullets.push(b)
                this.scene.addElement(b)
            }
        }
        // bullet.fire()
    }

    changeBullet(num) {
        // var name = 'doubleBullet'
        this.numberOfBullet = num

    }

    //
    removeBullet(index) {

    }
}
