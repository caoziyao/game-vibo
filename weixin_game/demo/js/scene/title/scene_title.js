class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        this.addBackground()
        this.tutorial = GuaImage.new(game, 'tutorial')
        this.tutorial.x = 140
        this.tutorial.y = 250

        this.addElement(this.tutorial)

        this.setupInput()
        // land
    }

    setupInput() {
        var game = this.game
        var self = this
        // game.canvas.addEventListener('mousedown', function(event) {
        //     // 检查是否点中了 ball
        //     var s = SceneMain.new(game)
        //     game.replaceScene(s)
        // })
        game.registerAction('j', function(){
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })



    }

    addBackground() {
        var game = this.game
        this.bg = GuaImage.new(game, 'background')
        this.bg.x = 0
        this.bg.y = 0
        this.bg.w = 400
        this.bg.h = 600
        this.addElement(this.bg)
    }

    update() {
        super.update()
    }

    draw() {
        super.draw()
        this.game.context.fillStyle = "#ffffff"
        this.game.context.fillText('点击 j 开始游戏', 140, 200)
    }

}
