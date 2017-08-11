class SceneMain extends GuaScene {
    constructor(game) {
        super(game)

        this.bg = SceneBackground.new(game, 'background')
        this.w = GuaAnimation.new(game)

        this.setup()

        this.addElement(this.bg)
        this.addElement(this.w)
        log('this.enemys', this.bg ,this.enemys)
        // this.addElement(this.hero)

        // 添加敌人
        // this.addElements()
        this.setupInputs()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    setupInputs() {
        var self = this
        self.game.registerAction('d', function(status) {
            self.w.move(2, status)
        })

        self.game.registerAction('a', function(status) {
            self.w.move(-2, status)
        })
    }

    // addElements() {
    //     var game = this.game
    //     var es = []
    //     for (var i = 0; i < this.numberOfEnemys; i++) {
    //         var e = SceneEnemy.new(game)
    //         es.push(e)
    //         this.addElement(e)
    //     }
    //     this.enemys = es
    //
    // }
    // 初始化
    setup() {
        // var game = this.game

    }

    draw() {
        super.draw()
    }

    update() {
        super.update()
        var game = this.game

    }

}
