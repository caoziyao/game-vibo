class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        game.registerAction('k', function(){
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })

        this.background = game.imageByName('bg')
        this.init()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    draw() {
        this.game.context.drawImage(this.background.image, 0, 0, 400, 600)
        this.game.context.fillText('按 k 开始游戏', 100, 190)
    }

    update() {

    }

    init() {

    }

}
