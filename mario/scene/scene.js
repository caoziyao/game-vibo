class SceneMain {
    constructor(game) {
        this.game = game
        this.bg = game.textureByName('background')
        this.mario = Mario.new(game)
        this.bricks = Bricks.new(game)

        this.setupInput()
    }

    setupInput() {

        // marigo
        var self = this
        var game = this.game
        game.registerAction('d', function(event){
            self.mario.moveRight(event)
        })

        game.registerAction('a', function(event){
            self.mario.moveLeft(event)
        })

        game.registerAction('j', function(event){
            self.mario.jump(event)
        })
        // game.registerAction('s', function(){
        //     self.y += 2
        //     console.log('this',game, self.x)
        // })
    }

    update() {
        this.mario.update()
        this.bricks.update()
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        var g = this.game

        // console.log('bg', bg)
        g.context.drawImage(this.bg, 0, 0, 600, 400)

        this.mario.draw()
        this.bricks.draw()

    }
}
