class SceneMain extends GuaScene {
    constructor(game) {
        super(game)

        this.background = GuaImage.new(game, 'bg')
        // this.background = game.imageByName('bg')
        this.hero = SceneHero.new(game)
        // this.bullet = SceneBullet.new(game)
        this.bullets = []
        this.enemys = []

        // 飞机运动
        game.registerAction('a', () => {
            this.hero.moveLeft()
        })
        game.registerAction('d',  () =>{
            this.hero.moveRight()
        })
        game.registerAction('w',  () =>{
            this.hero.moveUp()
        })
        game.registerAction('s',  () =>{
            this.hero.moveDown()
        })
        // 发射子弹 按下空格键
        game.registerAction(' ',  () =>{
            var bullet = SceneBullet.new(game)
            bullet.x = this.hero.x + 24
            bullet.y = this.hero.y
            this.bullets.push(bullet)
            bullet.fire()
        })

        this.elements = []
        this.elements.push(this.background)
        this.elements.push(this.hero)

        this.setup()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    // 初始化
    setup() {
        var game = this.game
        var n = 3   // 3 个敌人
        for (var i = 0; i < 3; i++) {
            var enemy = SceneEnemy.new(game)
            enemy.x = (i + 1) * 54
            enemy.y = (i + 1) * 50
            this.enemys.push(enemy)
        }
    }

    draw() {

        this.game.context.drawImage(this.background.texture, 0, 0, 400, 600)
        //this.game.context.fillText('游戏', 100, 190)

        this.game.drawImage(this.hero)

        // 画子弹
        for (var i = 0; i < this.bullets.length; i++) {
            var bullet = this.bullets[i]
            if (!bullet.killed) {
                this.game.drawImage(bullet)
            }
        }
        // 画敌人
        for (var i = 0; i < this.enemys.length; i++) {
            var enemy = this.enemys[i]
            if (enemy.alive) {
                this.game.drawImage(enemy)
            }
        }

    }

    update() {
        var game = this.game
        // 子弹更新
        for (var i = 0; i < this.bullets.length; i++) {
            var bullet = this.bullets[i]
            if (bullet.y < 0) {
                bullet.kill()
            }
            if (!bullet.killed) {
                bullet.move()
            }
        }

        // 敌人更新
        for (var i = 0; i < this.enemys.length; i++) {
            var enemy = this.enemys[i]
            if (enemy.y > 600) {
                enemy.kill()
                this.enemys.pop(i)
            }

            // 被子弹击中
            for (var j = 0; j < this.bullets.length; j++) {
                var bullet = this.bullets[j]
                if (enemy.collide(bullet)) {
                    var enemy_down = GuaImage.new(game,'enemy_down')
                    enemy.killing()
                    enemy.image = enemy_down
                    log('eme',this.enemys[i].image, this.enemys[i])

                }
            }

            enemy.move()

        }
        if (this.enemys.length == 0) {
            this.setup()
        }

        // 子弹碰撞


    }

}
