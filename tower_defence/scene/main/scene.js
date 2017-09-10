class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()

        this.elements = []
        this.gun = Gun.new(game)

        this.addElement(this.gun)
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }



    setup() {
        var game = this.game

        this.setupInput()

    }

    // 鼠标按键
    hasPoint(x, y) {
        var xIn = x >= this.restart.x && x <= this.restart.x + this.restart.w
        var yIn = y >= this.restart.y && y <= this.restart.y + this.restart.h
        return xIn && yIn
    }



    setupInput() {
        var game = this.game
        var self = this
        // mouser inputs
        this.game.registerMouse(function (event, status) {
            log('mouse event', status, event)
        })

    }







    draw() {
        super.draw()
        // this.game.context.drawImage(this.background, 0, 0, 400, 600)
        // this.game.context.fillText('按 k 开始游戏', 100, 190)
    }


    update() {

        super.update()



    }


}
