class ScenesMain extends GuaScene {
    constructor(game, positionX) {
        super(game)
        // this.game = game
        // this.h = this.game.height
        // this.w = this.game.width

        this.scenes = []
        this.sceneIdex = 0
        this.endFrame = false
        // this.mario = Mario.new(game)
        this.setupInput()
        this.addBackground()

        this.step = 2
        this.startX = 100
        this.startY = 0

        this.scrollX = this.startX
        this.scrollY = this.startY
        // this.addElement(this.mario)
        // this.currentScene =

        this.addBlock()
    }

    static new(...args) {
        return new this(...args)
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

    addBlock() {
        var tetromino = GameTetromino.new(this.game, 'S')
        this.addElement(tetromino)
    }

    setupInput() {
        var self = this
        var game = this.game
        game.registerAction('d', function(event){
            log('d')
        })

        game.registerAction('a', function(event){
            log('a')
        })

        game.registerAction('j', function(event){
            log('j')
        })
    }

    currentFrame() {
        return this.scenes[this.sceneIdex]
    }

    nextFrame() {
        return this.scenes[this.sceneIdex+1]
    }

    update() {
        var game = this.game
        super.update()
    }

    draw() {
        super.draw()

        this.scrollY += this.step
        var y = this.scrollY
        var x = this.startX

        // this.tetromino.drawBlockZ(x, y)

        // this.tetromino.drawBlockI(100, 0)
        // this.tetromino.drawBlockL(200, 0)
        // this.tetromino.drawBlockS(0, 100)
        // this.tetromino.drawBlockJ(0, 200)
        // this.tetromino.drawBlockO(100, 200)
        // this.tetromino.drawBlockT(200, 200)
    }
}
