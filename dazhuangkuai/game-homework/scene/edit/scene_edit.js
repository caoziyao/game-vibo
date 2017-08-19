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
        this.i = this.i || new this(...args)
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
    }

    update() {

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

        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log(x, y, event)
            // 检查是否点中了 ball

            this.enableEdit = true
            var editPoistion = [x, y]
            self.editBlock(editPoistion)
        })
        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
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
