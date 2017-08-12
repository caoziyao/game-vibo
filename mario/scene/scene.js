class ScenesMain extends GuaScene {
    constructor(game, positionX) {
        super(game)
        // this.game = game
        this.scenes = []

        this.sceneIdex = 0

        this.mario = Mario.new(game)
        this.setupInput()
        this.renderFromCofig()
        this.addElement(this.mario)
        // this.currentScene =
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

    currentFrame() {
        return this.scenes[this.sceneIdex]
    }

    nextFrame() {
        return this.scenes[this.sceneIdex+1]
    }

    // endFrame() {
    //
    // }

    renderFromCofig() {
        var game = this.game
        var frames = Object.keys(config)
        // log('key', key)
        for (var i = 0; i < frames.length; i++) {
            var f = frames[i]
            var items = config[f]
            // log('items', items)
            var baseX =  i == 0 ? 0 : 600;
            this.scenes[i] = Levels0.new(game, baseX)
            this.scenes[i].renderFromItems(f, items)
        }
    }

    update() {
        var game = this.game
        super.update()


        // 小动物碰撞
        for (var i = 0; i < this.currentFrame().enemys.enemys.length; i++) {
            var o = this.currentFrame().enemys
            var e = o.enemys[i]
            if (o.collide(this.mario, e)) {
                var image =  game.textureByName('goomba_stomp')
                e.texture = image
                e.y = 320
                log('coooo')
            }
        }

        if (this.sceneIdex < this.scenes.length - 1) {
            for (var i = 0; i < this.nextFrame().enemys.enemys.length; i++) {
                var o = this.nextFrame().enemys
                var e = o.enemys[i]
                if (o.collide(this.mario, e)) {
                    var image =  game.textureByName('goomba_stomp')
                    e.texture = image
                    e.y = 320
                    log('kkkk')
                }
            }
        }



        this.currentFrame().update()
        if (this.sceneIdex < this.scenes.length - 1) {
            this.nextFrame().update()
        }



        if (this.mario.x > 300) {

            var step = this.mario.x - 300

            if (this.sceneIdex < this.scenes.length - 1) {
                this.currentFrame().moveScene(step)
                this.nextFrame().moveScene(step)
                this.mario.x = 300
            }  else {
                this.currentFrame().moveScene(0)
            }



        }

        if (this.mario.x < 0) {
            this.mario.x = 0
        }

        if (this.mario.x > 600 - this.mario.texture.width) {
        //    log('this.mario.x', this.mario.x)
            this.mario.x = 600 - this.mario.texture.width
        }

        var baseX = this.currentFrame().baseX
        if (baseX <= -600) {
            // log('this.sceneIdex', this.sceneIdex)
            // this.scenes[this.sceneIdex] = this.scenes[this.sceneIdex+1]
            // this.scenes[this.sceneIdex+1] = this.scenes[this.sceneIdex+2]
            if (this.sceneIdex < this.scenes.length - 1) {
                this.sceneIdex = this.sceneIdex + 1
            }
            log('now .sceneIdex', this.sceneIdex)
        }
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        this.currentFrame().draw()
        if (this.sceneIdex < this.scenes.length - 1) {
            this.nextFrame().draw()
        }


        super.draw()
        var g = this.game

    }
}
