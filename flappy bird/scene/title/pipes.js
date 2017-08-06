class Pipes {
    constructor(game) {
        this.game = game

        this.pipes = []

        this.pipeSpace = 50
        this.pipeRowSpace = 200
        this.columsOfPipe = 3
        this.alive = true

        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = GuaImage.new(game, 'pipe_up')
            p1.fllipY = true
            p1.x = 500 + i * this.pipeRowSpace
            p1.h = p1.image.texture.height
            var p2 = GuaImage.new(game, 'pipe_down')
            p2.x = p1.x
            this.resetPipesPostion(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    resetPipesPostion(p1, p2) {
        p1.y = randonBetween(200, 400)
        // p2.y = p1.y + p1.h +
        this.pipeSpace = randonBetween(80, 100)
        p2.y = - 280 + randonBetween(80, 200) // randonBetween(200, 400)
        log('p1.y ', p1.y, p2.y )
    }

    update() {
        for (var p of this.pipes) {
            p.x -= 5
            if (p.x < -100) {
                p.x += this.pipeRowSpace * this.columsOfPipe
            }
        }
        //
        
    }

    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            // context.save()
            // var x = p.w / 2
            // var y = p.h / 2
            //
            // context.translate(x, y)
            // var scaleX = p.fllipX ? -1 : 1
            // var scaleY = p.fllipY ? -1 : 1
            //
            // context.scale(scaleX, scaleY)
            // // context.rotate(p.rotation * Math.PI / 180)
            // context.translate(-x, -y)

            context.drawImage(p.image.texture, p.x, p.y, p.w, p.h)
            // context.restore()
        }
    }
}
