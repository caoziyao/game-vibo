class SceneEdit{
    constructor(game) {
        this.game = game

        // this.ball = Ball.new(game)
        this.enableEdit = false

        // this.blocks = loadLevel(game, 1)
        this.bg = game.imageByName('background');
        this.blocks = loadLocalStorage(game)

        this.setupInput()
    }
    static new(...args) {
        this.i =  new this(...args)
        return this.i
    }

    draw() {
        // draw 背景
        var self = this
        var game = this.game

        this.game.context.drawImage(this.bg.image, 0, 0, 800, 600);
        // draw blocks
        for (var i = 0; i < self.blocks.length; i++) {
            var block = self.blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        // draw labels
        //1. 使用`font`设置字体。
       this.game.context.font = "16px serif";
       //2. 使用`fillStyle`设置字体颜色。
       this.game.context.fillStyle = "#ffffff";
       //3. 使用`fillText()`方法显示字体。
        this.game.context.fillText('鼠标点击开始编辑', 100, 290)
        this.game.context.fillText('按 k 开始游戏', 100, 320)
        this.game.context.fillText('按 q 清除砖块', 100, 350)
    }

    update() {

    }

    loadLocalPosition() {
        var ps = localStorage.getItem('blocks')
        var ps = ps != null ? JSON.parse(ps) : []

        return ps
    }

    addBlock(positon) {
        // position: [x, y]
        var p = positon
        var game = this.game
        var ps = this.loadLocalPosition()

        var block =  Block.new(game, p)
        block.x = block.x - block.w / 2
        block.y = block.y - block.h / 2
        this.blocks.push(block)

        // 保存 localStorage
        ps.push(p)
        var s = JSON.stringify(ps)
        localStorage.setItem('blocks', s)
    }

    removeBlock(index) {
        var i = index
        log('revoe block')
        this.blocks.splice(i, 1)
    }

    hasPoint(x, y) {
        var self = this
        for (var i = 0; i < self.blocks.length; i++) {
            var b = self.blocks[i]
            if (b.hasPoint(x, y)) {
                return [true, i]
            }
        }

        return [false, 0]
    }

    clean() {
        this.blocks = []
        var s = JSON.stringify(this.blocks)
        localStorage.setItem('blocks', s)
    }

    setupInput() {
        // mouse event
        var self = this
        var game = this.game
        var enableDrag = false
        var inBlock = false

        game.registerAction('q', function(){
            self.clean()
        })

        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log('down', x, y, event)
            // 检查是否点中了 ball

            this.enableEdit = true
            var editPoistion = [x, y]

            var status = self.hasPoint(x, y)[0]
            var index = self.hasPoint(x, y)[1]
            if (status) {
                self.removeBlock(index)
            } else {
                self.addBlock(editPoistion)
            }

        })

        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
            inBlock = false
            var editPoistion = [x, y]
            var status = self.hasPoint(x, y)[0]
            var index = self.hasPoint(x, y)[1]

            if (this.enableEdit && status) {
                self.removeBlock(index)
            } else if (this.enableEdit) {
                self.addBlock(editPoistion)
            } else {

            }


        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, 'up')
            this.enableEdit = false
            inBlock = false
        })
    }
}
