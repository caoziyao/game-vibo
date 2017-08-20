class SceneMain extends GuaScene {
    constructor(game) {
        super(game)

        this.bg = SceneBackground.new(game, 'background')
        // this.bg = game.imageByName('bg')
        this.hero = SceneHero.new(game)
        this.hero.scene = this

        // this.bullet = SceneBullet.new(game)
        this.enemys = []

        this.setup()

        this.addElement(this.bg)
        this.addElement(this.hero)

        // 添加敌人
        this.addElements()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    addElements() {
        var game = this.game
        var es = []
        for (var i = 0; i < this.numberOfEnemys; i++) {
            var e = SceneEnemy.new(game)
            e.scene = this
            //e.addBullets()
            es.push(e)
            this.addElement(e)

        }
        this.enemys = es

    }

    deleteElement(element) {

    }

    // 初始化
    setup() {
        var game = this.game
        this.numberOfEnemys = 6
        // 发射子弹 按下空格键
        game.registerAction('j',  () =>{
            this.hero.fire()
        })
    }

    draw() {
        super.draw()
    }

    bulletCollid(bullet, index) {
        var b = bullet
        for (var j = 0; j < this.enemys.length; j++) {
            var e = this.enemys[j]
            var eBullet = e.bullets
            if (b.collide(e)) {
                //b.kill()
                this.hero.removeBullet(index)
                e.killing()
                // this.deleteElement(e)
            }
        }


    }

    heroCollid() {
        for (var j = 0; j < this.enemys.length; j++) {
            var e = this.enemys[j]
            if (this.hero.collideEnemy(e)) {
                //b.kill()
                this.hero.kill()
                // this.deleteElement(e)
            }
        }

    }

    enemyBulletCollid() {
        var game = this.game
        for (var j = 0; j < this.enemys.length; j++) {
            var e = this.enemys[j]
            var eBullet = e.bullets
            for (var eb of eBullet) {
                if (eb.collide(this.hero)) {
                    this.hero.kill()
                }

            }

        }
    }

    update() {
        super.update()
        var game = this.game

        // 子弹碰撞
        for (var i = 0; i < this.hero.bullets.length; i++) {
            var b = this.hero.bullets[i]
            this.bulletCollid(b)
        }
        // 敌机碰撞
        this.heroCollid()

        // 敌机子弹
        this.enemyBulletCollid()

    }

}
