class GuaAnimation  {
    constructor(game) {
        this.game = game
        // 编码
        this.animations = {
            idle: [],
            run: [],
        }


        // this.frames = []
        for (var i = 1; i < 9; i++) {
            var name = `w${i}`
            var t = game.imageByName(name)
            this.animations['run'].push(t)
        }

        for (var i = 1; i < 4; i++) {
            var name = `idle${i}`
            var t = game.imageByName(name)
            this.animations['idle'].push(t)
        }

        this.setup()
        //
        // this.addElement(this.bg)

        // this.addElement(this.hero)

        // 添加敌人
        // this.addElements()

    }

    move(step, keyStatus) {
        this.flipX = step < 0
        this.x += step
        var animationNames = {
            down: 'run',
            up: 'idle',
        }
        var name = animationNames[keyStatus]
        this.changeAnimation(name)



    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }


    // 初始化
    setup() {
        this.animationName = 'idle'
        this.image = {}
        this.image.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 1
        this.alive = true

        this.x = 100
        this.y = 200
        this.w = this.image.texture.width
        this.h = this.image.texture.height

    }

    frames() {
        return this.animations[this.animationName]
    }

    draw() {
        // super.draw()
        var context = this.game.context
        if (this.flipX) {
            context.save()

            var x = this.x + this.w / 2

            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.image.texture, this.x, this.y, this.w, this.h)
            // this.game.drawImage(this)
            context.restore()

        } else {
            context.drawImage(this.image.texture, this.x, this.y, this.w, this.h)
        }
        // this.game.drawImage(this)

    }

    changeAnimation(name) {
        this.animationName = name
    }

    update() {
        var game = this.game
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
            this.image.texture = this.texture
        }


    }

}
