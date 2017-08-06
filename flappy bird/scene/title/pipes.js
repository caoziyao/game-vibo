class Pipes {
    constructor(game) {
        this.game = game
        //
        this.setup()
        // 添加管子
        this.addPipes()

    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    setup() {

        this.pipes = []

        // 管子垂直间距
        this.pipeVerticalSpace = 80
        // 管子横向间距
        this.pipeHorizontalSpace = 200
        // 管子数量
        this.columsOfPipe = 3
        this.alive = true
    }

    addPipes() {
        var game = this.game
        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = GuaImage.new(game, 'pipe_down')

            p1.x = 500 + i * this.pipeHorizontalSpace
            p1.y = randonBetween(-200, 0)
            p1.h = p1.image.texture.height
            p1.w = p1.image.texture.width

            var p2 = GuaImage.new(game, 'pipe_up')

            this.resetPipesPostion(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    resetPipesPostion(p1, p2) {
        // p2.y = p1.y + p1.h +
        p2.x = p1.x
        p2.y = p1.y + p1.h + this.pipeVerticalSpace // randonBetween(200, 400)
        log('p1.y ', p1.y, p2.y )
    }

    debug() {
        this.pipeVerticalSpace = config.pip_vertical_space.value
        this.pipeHorizontalSpace = config.pip_horizontal_space.value

    }

    update() {

        for (var i = 0; i < this.columsOfPipe; i++) {
            var index = i * 2
            var p1 = this.pipes[index]
            var p2 = this.pipes[index+1]
            p1.x -= 5
            this.resetPipesPostion(p1, p2)

            if (p1.x < -p1.w) {
                   p1.x =  this.pipeHorizontalSpace * this.columsOfPipe
             }
        }


    }

    draw() {
        var context = this.game.context
        for (var p of this.pipes) {

            context.drawImage(p.image.texture, p.x, p.y, p.w, p.h)
            // context.restore()
        }
    }
}
