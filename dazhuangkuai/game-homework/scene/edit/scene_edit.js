class SceneEdit{
    constructor(game) {
        this.game = game

        // this.ball = Ball.new(game)
        this.enableEdit = false
        // this.blocks = loadLevel(game, 1)
        this.bg = game.imageByName('background');
        this.cooldown = 10

        this.storage = EditLocalStorage.new(game)

        this.blocks = this.storage.loadLocalStorage()

        this.setupInput()
        this.text = SceneEditText.new(game)
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
        this.text.draw()
    }

    update() {
        this.cooldown--
    }

    addBlock(positon) {
        // position: [x, y]
        var p = positon
        var game = this.game


        var block =  Block.new(game, p)
        block.x = block.x - block.w / 2
        block.y = block.y - block.h / 2
        this.blocks.push(block)

        // 保存 localStorage
        this.storage.add(p)
    }

    removeBlock(index) {
        var i = index
        this.blocks.splice(i, 1)

        var ps = this.storage.loadPosition()
        ps.splice(i, 1)
        this.storage.save(ps)
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
        this.storage.clean()
    }

    setupInput() {
        // mouse event
        var self = this
        var game = this.game
        var enableDrag = false

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
            if (status && this.enableEdit) {
                self.removeBlock(index)
            } else {
                self.addBlock(editPoistion)
            }

        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'up')
            this.enableEdit = false
        })

        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
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

    }
}
