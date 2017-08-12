class ScenesMain extends GuaScene {
    constructor(game, positionX) {
        super(game)
        // this.game = game
        this.h = this.game.height
        this.w = this.game.width

        this.scenes = []
        this.sceneIdex = 0
        this.endFrame = false
        this.mario = Mario.new(game)
        this.setupInput()
        this.renderFromCofig()
        this.addElement(this.mario)
        // this.currentScene =
    }

    static new(...args) {
        return new this(...args)
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


    renderFromCofig() {
        var game = this.game
        var frames = Object.keys(config)
        for (var i = 0; i < frames.length; i++) {
            var f = frames[i]
            var items = config[f]
            // log('items', items)
            var baseX =  i == 0 ? 0 : this.w;
            this.scenes[i] = Levels0.new(game, baseX)
            this.scenes[i].renderFromItems(f, items)
        }
    }

    collideEvent() {
        var game = this.game
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

    }

    update() {
        var game = this.game
        super.update()

        // 碰撞事件
        this.collideEvent()

        this.currentFrame().update()
        this.endFrame || this.nextFrame().update()
        // if (this.sceneIdex < this.scenes.length - 1) {
        //     this.nextFrame().update()
        // }

        if (this.mario.x > this.w / 2) {

            var step = this.mario.x - this.w / 2
            if (this.sceneIdex < this.scenes.length - 1) {
                this.currentFrame().moveScene(step)
                this.nextFrame().moveScene(step)
                this.mario.x = this.w / 2
            }  else {
                this.currentFrame().moveScene(0)
            }
        }

        var baseX = this.currentFrame().baseX
        if (baseX <= -this.w) {
            // log('this.sceneIdex', this.sceneIdex)
            if (this.sceneIdex < this.scenes.length - 1) {
                this.sceneIdex = this.sceneIdex + 1
            }
            if (this.sceneIdex == this.scenes.length - 1) {
                this.endFrame = true
            }
            log('now .sceneIdex', this.sceneIdex, this.endFrame)
        }
    }



    draw() {
        this.currentFrame().draw()
        this.endFrame || this.nextFrame().draw()

        super.draw()
        var g = this.game

    }
}
