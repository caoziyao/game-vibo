class SceneMain extends GuaScene {
    constructor(game) {
        super(game)


        // land
        this.addBackground()
        this.addPipes()
        this.addLand()
        this.addBird()
        this.addScoresBord()

        this.addGameOver()

        this.setup()

        this.setupInput()
    }


    setup() {
        var game = this.game
        window.paused = false
        this.skipCount = 10
        this.end = false
        // 分数
        var firstPipe = this.pipes.pipes[0]
        this.currentPipeX = firstPipe.x + firstPipe.ws
        // log('this.currentPipeX', this.currentPipeX)

    }

    gameOver() {

        this.end = true
        this.addElement(this.textGameOver)
        this.addElement(this.restart)
        this.addElement(this.share)
    }

    // 鼠标按键
    hasPoint(x, y) {
        var xIn = x >= this.restart.x && x <= this.restart.x + this.restart.w
        var yIn = y >= this.restart.y && y <= this.restart.y + this.restart.h
        return xIn && yIn
    }

    restartGame() {
        var g = this.game
        var s = SceneMain.new(g)
        // var s = SceneMain.new(g)
        g.replaceScene(s)

    }

    setupInput() {
        var game = this.game
        var self = this
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // 检查是否点中了 ball
            if (self.hasPoint(x, y)) {
                // enableDrag = true
                log('restaret')
                self.restartGame()

            }
        })

    }

    addGameOver() {
        var game = this.game
        this.textGameOver = GuaImage.new(game, 'game_over')
        this.textGameOver.x = 100
        this.textGameOver.y = 200

        this.restart = GuaImage.new(game, 'restart')
        this.restart.x = 110
        this.restart.y = 280
        this.restart.w = this.restart.texture.width
        this.restart.h = this.restart.texture.height

        this.share = GuaImage.new(game, 'share')
        this.share.x = 210
        this.share.y = 280


    }

    addScoresBord() {
        var game = this.game
        this.scores = Scores.new(game)
        // // this.bg.w = 400
        // // this.bg.h = 600
        this.addElement(this.scores)
    }

    addBackground() {
        var game = this.game
        this.bg = GuaImage.new(game, 'background')
        this.bg.x = 0
        this.bg.y = 0
        this.bg.w = 400
        this.bg.h = 600
        this.addElement(this.bg)
    }

    addPipes() {
        var game = this.game
        this.pipes = Pipes.new(game)
        this.addElement(this.pipes)
    }

    addLand() {
        var game = this.game
        this.land = GuaImage.new(game, 'land')
        this.land.x = 0
        this.land.y = 500
        this.land.w = 700
        this.land.h = 100
        this.addElement(this.land)
    }

    addBird() {
        var game = this.game
        this.bird = Bird.new(game)
        this.bird.x = 100
        this.bird.y = 200
        this.addElement(this.bird)
    }


    static new(...args) {
        this.i = new this(...args)
        return this.i
    }



    draw() {
        super.draw()
        // this.game.context.drawImage(this.background, 0, 0, 400, 600)
        // this.game.context.fillText('按 k 开始游戏', 100, 190)
    }

    update() {

        super.update()

        // land scrop
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 10
            offset = 45
        }

        this.land.x += offset

        // 小鸟碰撞
        for (var p of this.pipes.pipes) {
            if (this.bird.collide(p)) {
                this.bird.kill()
                this.gameOver()
                // var s = SceneEnd.new(this.game)
                // this.game.replaceScene(s)
                window.paused = true

            }
        }

        // 分数
        var birdX = this.bird.x

        for (var i = 0; i < this.pipes.columsOfPipe; i++) {
            var index = i * 2
            var p1 = this.pipes.pipes[index]
            var p2 = this.pipes.pipes[index+1]

            if (birdX > p1.x && birdX < p1.x + p1.w) {
                // log('this.currentPipeX', this.currentPipeX, this.bird.x)
                this.currentPipeX = true

                this.currentPipe = p1
            }
        }

        if (this.currentPipeX && birdX >= this.currentPipe.x + this.currentPipe.w) {
            this.currentPipeX = false
            this.scores.scores += 1
            log('scores', this.scores.scores)
        }


    }


}
