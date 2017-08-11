class ScenesMain extends GuaScene {
    constructor(game, positionX) {
        super(game)
        // this.game = game
        this.scenes = []

        this.sceneIdex = 0

        this.mario = Mario.new(game)
        this.setupInput()

        this.scenes[0] = Levels0.new(game, 0)
        for (var i = 1; i < 16; i++) {
            this.scenes[i] = Levels0.new(game, 600)
        }

        this.addElement(this.mario)

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
    }

    update() {
        var game = this.game
        super.update()


        // 小动物碰撞
        for (var i = 0; i < this.scenes[this.sceneIdex].enemys.enemys.length; i++) {
            var o = this.scenes[this.sceneIdex].enemys
            var e = o.enemys[i]
            if (o.collide(this.mario, e)) {
                var image =  game.textureByName('goomba_stomp')
                e.texture = image
                e.y = 320
                log('coooo')
            }
        }

        for (var i = 0; i < this.scenes[this.sceneIdex+1].enemys.enemys.length; i++) {
            var o = this.scenes[this.sceneIdex+1].enemys
            var e = o.enemys[i]
            if (o.collide(this.mario, e)) {
                var image =  game.textureByName('goomba_stomp')
                e.texture = image
                e.y = 320
                log('kkkk')
            }
        }

        this.scenes[this.sceneIdex].update()
        this.scenes[this.sceneIdex+1].update()


        if (this.mario.x > 300) {
            // log('this.sceneIdex', this.sceneIdex)
            if (this.sceneIdex < this.scenes.length - 2) {
                var step = this.mario.x - 300
                this.mario.x = 300
                this.scenes[this.sceneIdex+1].move(step)
                this.scenes[this.sceneIdex].move(step)

            } else {
                this.scenes[this.sceneIdex+1].levelMoveStep = 0
                this.scenes[this.sceneIdex].levelMoveStep = 0
            }


        }

        if (this.mario.x < 0) {
            this.mario.x = 0
        }

        if (this.mario.x > 600 - this.mario.texture.width) {
        //    log('this.mario.x', this.mario.x)
            this.mario.x = 600 - this.mario.texture.width
        }

        var baseX = this.scenes[this.sceneIdex].baseX
        if (baseX <= -600) {
            log('this.sceneIdex', this.sceneIdex)
            // this.scenes[this.sceneIdex] = this.scenes[this.sceneIdex+1]
            // this.scenes[this.sceneIdex+1] = this.scenes[this.sceneIdex+2]
            if (this.sceneIdex < this.scenes.length - 2) {
                this.sceneIdex = this.sceneIdex + 1
            }

        }
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        this.scenes[this.sceneIdex].draw()
        this.scenes[this.sceneIdex+1].draw()
        super.draw()
        var g = this.game

    }
}
