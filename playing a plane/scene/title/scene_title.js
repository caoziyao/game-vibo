class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        game.registerAction('k', function(){
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })

        this.init()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        this.game.context.fillText('按 k 开始游戏', 100, 190)
    }

    update() {

    }

    init() {

    }

}
