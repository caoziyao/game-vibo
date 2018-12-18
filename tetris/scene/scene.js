class ScenesMain extends GuaScene {
    constructor(game, positionX) {
        super(game)
        // this.game = game
        this.h = this.game.height
        this.w = this.game.width

        this.scenes = []
        this.sceneIdex = 0
        this.endFrame = false
        // this.mario = Mario.new(game)
        this.setupInput()
        this.addBackground()
        // this.addElement(this.mario)
        // this.currentScene =
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
    }
}
