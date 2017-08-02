class SceneMain extends GuaScene {
    constructor(game) {
        super(game)

        this.bg = SceneBackground.new(game, 'background')
        // this.bg = game.imageByName('bg')
        this.hero = SceneHero.new(game)
        this.hero.scene = this
        // this.bullet = SceneBullet.new(game)
        this.bullets = []
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
            es.push(e)
            this.addElement(e)
        }
        this.enemys = es

    }
    // 初始化
    setup() {
        var game = this.game
        this.numberOfEnemys = 8
        // 发射子弹 按下空格键
        game.registerAction(' ',  () =>{
            this.hero.fire()
        })
    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
        var game = this.game

        // 子弹更新
        // for (var i = 0; i < this.bullets.length; i++) {
        //     var bullet = this.bullets[i]
        //     if (bullet.y < 0) {
        //         bullet.kill()
        //     }
        //     if (!bullet.killed) {
        //         bullet.move()
        //     }
        // }

        // 敌人更新
        // for (var i = 0; i < this.enemys.length; i++) {
        //     var enemy = this.enemys[i]
        //     enemy.update()
        //
        // }
        // // 被子弹击中
        // for (var j = 0; j < this.bullets.length; j++) {
        //     var bullet = this.bullets[j]
        //     if (enemy.collide(bullet)) {
        //         var enemy_down = GuaImage.new(game,'enemy_down')
        //         enemy.killing()
        //         enemy.image = enemy_down
        //
        //     }
        // }

        // 子弹碰撞
    }

}
