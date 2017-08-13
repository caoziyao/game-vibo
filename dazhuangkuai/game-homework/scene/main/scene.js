class Scene{
    constructor(game) {
        this.game = game
        this.paddle = Paddle.new(game)
        this.ball = Ball.new(game)
        this.enableEdit = false

        this.score = 0

        // this.blocks = loadLevel(game, 1)
        this.blocks = loadLocalStorage(game)

        this.setupInput()
    }
    static new(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    draw() {
        // draw 背景
        var self = this
        var game = this.game
        game.context.fillStyle = "#554"
        game.context.fillRect(0, 0, 400, 300)
        // draw
        game.drawImage(self.paddle)
        game.drawImage(self.ball)
        // draw blocks
        for (var i = 0; i < self.blocks.length; i++) {
            var block = self.blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        // draw labels
        game.context.fillText('分数: ' + self.score, 10, 290)
    }

    update() {
        var self = this
        var game = this.game
        if (window.paused) {
            return
        }

        self.ball.move()
        // 判断游戏结束
        if (self.ball.y > self.paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }
        // 判断相撞
        if (self.paddle.collide(self.ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            self.ball.反弹()
        }
        // 判断 ball 和 blocks 相撞
        for (var i = 0; i < self.blocks.length; i++) {
            var block = self.blocks[i]
            if (block.collide(self.ball)) {
                // log('block 相撞')
                block.kill()
                self.ball.反弹()
                // 更新分数
                self.score += 100
            }
        }
    }

    loadLocalPosition() {
        var ps = localStorage.getItem('blocks')
        var ps = ps != null ? JSON.parse(ps) : []

        return ps
    }

    editBlock(positon) {
        var game = this.game
        var p = positon
        var ps = this.loadLocalPosition()

        var block =  Block.new(game, p)
        this.blocks.push(block)

        // 保存 localStorage
        ps.push(p)
        var s = JSON.stringify(ps)
        localStorage.setItem('blocks', s)
    }

    setupInput() {
        // mouse event
        var self = this
        var game = this.game
        var enableDrag = false
        var inBlock = false

        game.registerAction('a', function(){
            self.paddle.moveLeft()
        })
        game.registerAction('d', function(){
            self.paddle.moveRight()
        })
        game.registerAction('f', function(){
            log('this.ball', self, self.ball)
            self.ball.fire()
        })

        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, event)
            // 检查是否点中了 ball

            this.enableEdit = true
            if (self.ball.hasPoint(x, y)) {
                // 设置拖拽状态
                enableDrag = true
            }

            var editPoistion = [x, y]
            self.editBlock(editPoistion)
        })
        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
            if (enableDrag) {
                log(x, y, 'drag')
                self.ball.x = x
                self.ball.y = y
            }
            inBlock = false
            var editPoistion = [x, y]
            for (var i = 0; i < self.blocks.length; i++) {
                var b = self.blocks[i]
                if (b.hasPoint(x, y)) {
                    inBlock = true
                }
            }
            log('inBlock', inBlock)
            if (this.enableEdit && !inBlock ) {
                self.editBlock(editPoistion)
            }


        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, 'up')
            this.enableEdit = false
            enableDrag = false
            inBlock = false
        })
    }
}
