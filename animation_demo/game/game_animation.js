class GuaAnimation  {
    constructor(game) {
        this.game = game
        // 编码
        this.frames = []
        for (var i = 1; i < 9; i++) {
            var name = `w${i}`
            var t = game.imageByName(name)

            this.frames.push(t)
        }

        this.setup()
        //
        // this.addElement(this.bg)

        // this.addElement(this.hero)

        // 添加敌人
        // this.addElements()

    }

    move(step) {
        this.x += step
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }


    // 初始化
    setup() {
        this.image = {}
        this.image.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 1
        this.alive = true

        this.x = 100
        this.y = 200
        this.w = this.image.texture.width
        this.h = this.image.texture.height 

    }

    draw() {
        // super.draw()
        this.game.drawImage(this)
    }

    update() {
        var game = this.game
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
            this.image.texture = this.texture
        }


    }

}
