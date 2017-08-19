class Scene{
    constructor(game) {
        this.game = game
        this.paddle = Paddle.new(game)
        this.ball = Ball.new(game)

        this.score = 0

        // this.blocks = loadLevel(game, 1)
        this.bg = game.imageByName('background');
        this.blocks = loadLocalStorage(game)

        this.setup()
        this.setupInput()
    }
    static new(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    setup() {

    }

    draw() {
        // draw 背景
        var self = this
        var game = this.game
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 400, 300)
        // draw

        this.game.context.drawImage(this.bg.image, 0, 0, 800, 600);
        // draw blocks
        for (var i = 0; i < self.blocks.length; i++) {
            var block = self.blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        // draw labels
        game.context.font = "16px serif";
        //2. 使用`fillStyle`设置字体颜色。
        game.context.fillStyle = "#ffffff";
        game.context.fillText('分数: ' + self.score, 10, 290)

        game.drawImage(self.paddle)
        game.drawImage(self.ball)
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

        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, 'up')
            this.enableEdit = false
        })
    }
}
