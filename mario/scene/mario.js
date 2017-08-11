class Mario extends Animation{
    constructor(game) {
        super(game)

        this.texture = game.textureByName('mario')
        this.x = 200
        this.y = 303
        this.speed = 1
        this.w = this.texture.width
        this.h = this.texture.height

        // 重量
        this.gy = 1.5
        this.vy = 0
        this.jumpFlag = false

        // 硬编码
        this.frameCount = 3
        this.currentAnimationName = 'idle'
        this.frameIndex = 0
        this.flipX = 0
        this.animations = {
            idle: [],
            walk: [],
        }

        // idle
        this.animations['idle'] = [game.textureByName('mario')]
        this.animations['jump'] = [game.textureByName('mario_jump')]
        // run
        for (var i = 1; i < 4; i++) {
            var name = `mario_walk${i}`
            var t = game.textureByName(name)
            this.animations['walk'].push(t)
        }
    }

    frame() {

    }

    update() {
        var game = this.game

        // 更新重力
        this.y += this.vy
        this.vy += this.gy * 0.1
        if (this.y > 303) {
            this.vy = 0
            this.y = 303
            this.jumpFlag = false
            this.changeStaticAnimation('idle')
        }

        // 更新动画
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 15
            this.frameIndex = (this.frameIndex + 1) % this.animations[this.currentAnimationName].length
            this.texture = this.animations[this.currentAnimationName][this.frameIndex]
        }



    }

    draw() {
        var game = this.game
        // game.context.drawImage(this.texture, this.x, this.y)
        var context = this.game.context
        if (this.flipX) {
            context.save()

            var x = this.x + this.w / 2

            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y)
            // this.game.drawImage(this)
            context.restore()

        } else {
            context.drawImage(this.texture, this.x, this.y)
        }
    }


    static new(...args) {
        return new this(...args)
    }

    changeSportAnimation(type) {

        var d = {
            keydown: 'walk',
            keyup: 'idle',
        }

        var name = d[type]

        // 跳跃
        if (this.jumpFlag == true) {
            this.changeStaticAnimation('jump')
        } else {
            this.currentAnimationName = name
        }

    }

    changeStaticAnimation(name) {
        this.currentAnimationName = name
    }

    moveRight(event) {
        this.flipX = 0

        var type = event.type
        this.changeSportAnimation(type)
        this.x += this.speed
    }

    moveLeft(event) {
        this.flipX =  1
        var type = event.type
        this.changeSportAnimation(type)
        this.x -= this.speed
    }

    jump() {
        if (this.jumpFlag == false) {
            this.jumpFlag = true
            this.changeStaticAnimation('jump')
            this.vy = -6
        }

    }
}
