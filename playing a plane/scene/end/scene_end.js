class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)

        game.registerAction('r', function(){
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })

        this.background = game.imageByName('background')
        this.init()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        this.game.context.drawImage(this.background, 0, 0, 400, 600)
        this.game.context.fillText('游戏结束，按 r 开始游戏', 100, 190)
    }

    update() {

    }

    init() {

    }

}
