class Bird extends GuaAnimation {
    constructor(game) {
        super(game)
        this.game = game
        // 编码
        this.animations = {
            idle: [],
            run: [],
        }

        // this.frames = []
        for (var i = 0; i < 3; i++) {
            var name = `bird${i}`
            var t = game.imageByName(name)
            this.animations['idle'].push(t)
        }

        // 重量
        this.gy = 10
        this.vy = 0

        this.setup()
        this.setupInput()
    }

    move(step, keyStatus) {
        this.flipX = step < 0
        this.x += step
    }


    // 初始化
    setup() {
        this.rotation = 0
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

    kill() {
        this.alive = false
    }

    frames() {
        return this.animations[this.animationName]
    }

    jump() {
        if (this.alive) {
            this.vy = -10
            this.rotation = -45
        }

    }

    setupInput() {
        var self = this
        self.game.registerAction('d', function(status) {
            self.move(2, status)
        })

        self.game.registerAction('a', function(status) {
            self.move(-2, status)
        })

        self.game.registerAction('j', function(status) {
            self.jump()
        })
    }

    draw() {
        var context = this.game.context
        context.save()
        var x = this.x + this.w / 2
        var y = this.y + this.h / 2

        context.translate(x, y)

        if (this.flipX) {
            context.scale(-1, 1)
        }

        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-x, -y)

        context.drawImage(this.image.texture, this.x, this.y, this.w, this.h)
        context.restore()
    }

    changeAnimation(name) {
        this.animationName = name
    }

    collide(pipe) {
        return rectIntersects(this, pipe) && rectIntersects(pipe, this)
    }

    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        if (this.y >= 465) {
            this.y = 465
        }

        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 5
        }

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
